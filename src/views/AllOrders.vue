<template>
  <div v-if="!loading" class="container mx-auto p-4">
    <h1 class="text-3xl font-medium text-center py-4">VIEW ALL ORDERS</h1>

    <!-- Display order details here -->
    <div v-for="order in orderList" :key="order.id">
      <p>Order ID: {{ order.id }}</p>
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
