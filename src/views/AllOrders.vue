<template>
  <div class="container mx-auto p-4 flex">
    <!-- Sidebar -->
    <div class="w-1/4 sm:w-1/2 mr-4 sm:mr-2">
      <nav class="sidebar">
        <ul>
          <li>
            <span class="category">User Profile</span>
            <ul>
              <li>
                Technology opens up all sorts of possibilities for retail
                management. One of these innovations is text-to-shop, which
                offers a way for businesses to implement checkout-less shopping
                for online purchases.
                <ul>
                  <li>
                    It’s easy to imagine ways eCommerce retailers may use text
                    messaging to offer shoppers a more convenient shopping
                    experience. For instance, a retailer could send shipment
                    updates to customers who bought items online to advise them
                    of the status of their orders. This is a smart and simple
                    way to offer the kind of service that impresses consumers.
                    <ul>
                      <li>
                        eCommerce User Experience (UX) refers to a customer's
                        overall experience when interacting with an online
                        store. It includes the design, layout, navigation,
                        product pages, checkout process, and customer service,
                        as well as how they all work together to provide a
                        seamless and enjoyable shopping experience for the
                        customer. A high-quality eCommerce UX should make it
                        simple for customers to find and buy products, with as
                        little friction and confusion as possible. It should
                        also provide customers with the information they need to
                        make informed purchasing decisions, as well as provide
                        prompt and dependable customer service.
                        <ul>
                          <!-- <li>
                <span class="item" @click="redirectToLogin">Login</span>
              </li> -->
                          <!-- <li>
                <span class="item" @click="redirectToSignUp"
                  >User Registration</span
                >
              </li> -->
                          <br />

                          <li>
                            <span class="item" @click="redirectToLogout"
                              >Logout</span
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Order View -->
    <div class="w-3/4 sm:w-1/2 content">
      <h1 class="text-3xl font-medium text-left py-4">VIEW ALL ORDERS</h1>

      <!-- Display order details here -->
      <div v-if="!loading">
        <div v-for="order in orderList" :key="order.id">
          <p :class="{ 'bg-gray-200': order.id }">Order ID: {{ order.id }}</p>
          <p>Total Price: &#8377;{{ order.total_price }}</p>
          <p>Status: {{ order.status }}</p>
          <p>Payment Status: {{ order.payment_status }}</p>
          <p>Delivery Address: {{ order.delivery_address }}</p>
          <p>Delivery Method: {{ order.delivery_method }}</p>
          <p>Created At: {{ order.created_at }}</p>

          <!-- Display ordered items -->

          <hr class="my-4" />
        </div>
      </div>
      <div v-else class="skeleton-loader-banner">
        <!-- You can customize the skeleton loader elements and styles -->
        <div class="skeleton-box" v-for="n in 1" :key="n"></div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true,
      rawOrderList: [], // Use an array for the raw order list
    };
  },
  computed: {
    orderList() {
      // Transform the raw order list to the expected format
      if (this.rawOrderList && this.rawOrderList.length > 0) {
        return this.rawOrderList.map((order) => ({
          id: order.id || "",
          total_price: order.total_price || "",
          status: order.status || "",
          payment_status: order.payment_status || "",
          delivery_address: order.delivery_address || "",
          delivery_method: order.delivery_method || "",
          created_at: order.created_at || "",
          items: (order.cart || []).map((cartItem) => ({
            product_id: cartItem.product_id || "",
            quantity: cartItem.quantity || 0,
            product: cartItem.product || {},
            // Add more details as needed
          })),
        }));
      } else {
        return [];
      }
    },
  },
  methods: {
    // Fetch the list of orders for the authenticated user
    async fetchOrderList() {
      const apiUrl = "https://ecommerce.hyperzod.dev/api/user/orders";

      try {
        const authToken = this.getAuthToken();
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        // Assign the raw order list directly
        this.rawOrderList = response.data.data[0] || [];
      } catch (error) {
        console.error("API Error:", error);
      }
    },

    // Define the getAuthToken method
    getAuthToken() {
      return localStorage.getItem("authToken");
    },
    // redirectToSignUp() {
    //   this.$router.push("/register");
    // },

    async redirectToLogout() {
      const confirmLogout = confirm("Are you sure you want to log out?");
      if (confirmLogout) {
        const token = localStorage.getItem("authToken");
        if (token) {
          try {
            // Call your logout API here, replace the URL with your actual logout endpoint
            await axios.post(
              "https://ecommerce.hyperzod.dev/api/user/logout",
              {}, // You may pass any additional data required for logout
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            // Clear the token from local storage or any other cleanup steps
            localStorage.removeItem("authToken");
            localStorage.removeItem("cartId");
            localStorage.removeItem("user_id");

            // Redirect to the login page
            this.$router.push("/login");
          } catch (error) {
            console.error("Logout Error:", error);
          }
        }
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  created() {
    this.fetchOrderList();
  },
};
</script>

<style scoped>
.sidebar {
  width: 100%;
  height: 5.6%;
  max-width: 400px;
  background-color: #e2dfed;
  color: black;
  padding: 20px;
  border-radius: 10px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar .category {
  display: block;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.sidebar .item {
  display: block;
  padding: 8px;
  background-color: #b2afbc;
  border-radius: 5px;
  cursor: pointer;
}

.sidebar .item:hover {
  background-color: #777;
}
.content {
  width: 90%;
}
.skeleton-loader-banner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.skeleton-box {
  width: 1400px;
  height: 500px;
  background-color: #ccc;
  margin: 10px;
  border-radius: 8px;
}
/* Add any custom styles here */
</style>
