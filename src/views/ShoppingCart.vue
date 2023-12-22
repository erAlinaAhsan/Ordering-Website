<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-light text-center py-4">SHOPPING CART</h1>

    <!-- Cart Items -->
    <div class="flex flex-wrap -mx-2">
      <div class="w-full md:w-9/12 p-2">
        <table class="w-full">
          <thead>
            <tr>
              <th class="text-left">ITEMS</th>
              <th class="text-left">PRICE</th>
              <th class="text-left">QUANTITY</th>
              <th class="text-left">TOTAL</th>
              <th class="text-left">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="index">
              <td>
                <div class="flex items-center">
                  <img
                    :src="item.product.image"
                    alt="Product Image"
                    class="w-16 h-16 object-cover rounded mr-2"
                  />
                  <div>
                    <p class="font-bold">{{ item.product.name }}</p>
                  </div>
                </div>
              </td>
              <td>&#8377;{{ item.product.price }}</td>
              <td>
                <p class="font-bold">{{ item.quantity }}</p>
              </td>
              <td>
                <p class="font-bold">
                  &#8377;{{ calculateItemTotalPrice(item) }}
                </p>
              </td>
              <td>
                <a @click="removeCartItem(index)">X</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Order Summary -->
      <div class="w-full md:w-3/12 p-2 bg-gray-200">
        <p class="text-xl font-bold">Order Summary</p>
        <p class="text-sm">
          Shipping and additional costs are calculated based on values you have
          entered.
        </p>

        <table class="w-full">
          <tbody>
            <tr>
              <td>Order Subtotal</td>
              <td class="text-right">&#8377;{{ orderSummary.subtotal }}</td>
            </tr>
            <tr>
              <td>Shipping Charges</td>
              <td class="text-right">
                &#8377;{{ orderSummary.shippingCharges }}
              </td>
            </tr>
            <tr>
              <td>Tax</td>
              <td class="text-right">&#8377;{{ orderSummary.tax }}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td class="text-right font-bold">
                &#8377;{{ orderSummary.total }}
              </td>
            </tr>
          </tbody>
        </table>

        <div class="text-center mt-5">
          <button
            v-if="!orderPlaced"
            class="bg-blue-500 text-white px-4 py-2 rounded"
            @click="placeOrder"
          >
            Place Order
          </button>
          <p v-if="orderPlaced" class="text-green-600 font-bold">
            Order placed successfully! Redirecting to view order page...
          </p>
        </div>
      </div>
    </div>

    <!-- Additional Information -->
    <div class="card bg-blue-400 p-4 mt-4">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <i class="mdi mdi-truck text-4xl"></i>
        </div>
        <div class="ml-4">
          <h3 class="font-light">SHIPPING & TAX INCLUDED</h3>
          <p class="font-thin">Free gift above &#8377;5000 shopping</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cartItems: [],
      orderSummary: {
        subtotal: 0,
        shippingCharges: 0,
        tax: 0,
        total: 0,
      },
      orderPlaced: false,
      cartId: null,
      orderStatus: null,
      orderId: null, // New property to store the order ID
    };
  },
  methods: {
    async fetchCartDetails(cartId) {
      try {
        const response = await axios.get(
          `https://ecommerce.hyperzod.dev/api/cart/${cartId}`
        );
        console.log(response);
        if (response.status == 200) {
          this.cartItems = response.data[0].data;
        } else {
          this.cartItems = null; // If no product in the cart, set an empty array
        }
        this.calculateOrderSummary();
      } catch (error) {
        console.error("API Error:", error);
      }
    },
    calculateItemTotalPrice(item) {
      return (item.product.price * item.quantity).toFixed(2);
    },
    calculateOrderSummary() {
      if (this.cartItems && this.cartItems.length > 0) {
        // Initialize order summary values
        let subtotal = 0;
        let shippingCharges = 100;
        let tax = 0;

        // Loop through each cart item in the cart array
        for (const cartItem of this.cartItems) {
          // Calculate subtotal for each item
          const product = cartItem.product;
          subtotal += +product.price * cartItem.quantity;

          // You can add more logic here if needed
        }

        // Calculate tax based on the overall subtotal
        tax = subtotal * 0.05;

        // Calculate total including shipping charges
        const total = subtotal + shippingCharges + tax;

        // Update order summary values
        this.orderSummary.subtotal = subtotal.toFixed(2);
        this.orderSummary.shippingCharges = shippingCharges;
        this.orderSummary.tax = tax.toFixed(2);
        this.orderSummary.total = total.toFixed(2);
      } else {
        console.log("Cart not available or empty");
        // Set default values for an empty cart
        this.orderSummary = {
          subtotal: "0.00",
          shippingCharges: 0,
          tax: "0.00",
          total: "0.00",
        };
      }
    },

    removeCartItem(index) {
      console.log("Clicked");
      console.log(index);
      const cartItem = this.cartItems[index];
      console.log(cartItem);
      console.log(cartItem.cart_id);
      console.log(cartItem.product_id);

      if (!cartItem || !cartItem.product_id) {
        console.error("Invalid cart item:", cartItem);
        return;
      }

      const cartId = this.cartId;
      const productId = cartItem.product_id;
      const requestData = {
        product_id: productId,
        cart_id: cartId,
      };

      axios
        .delete("https://ecommerce.hyperzod.dev/api/cart", {
          data: requestData,
        })
        .then(() => {
          this.cartItems.splice(index, 1);
          this.calculateOrderSummary();
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            console.error("Item not found:", error.response.data.message);
            // Handle 404 error (e.g., display a message to the user)
          } else {
            console.error("API Error:", error);
          }
        });
    },

    isAuthenticated() {
      // Check if the user is authenticated
      // For example, check if there is a valid authentication token in local storage
      return !!this.getAuthToken();
    },

    getAuthToken() {
      // Retrieve the authentication token from local storage
      return localStorage.getItem("authToken");
    },
    getUserId() {
      let user_id = localStorage.getItem("user_id");
      return +user_id;
    },

    getCartId() {
      let cartId = localStorage.getItem("cartId");
      return cartId;
    },

    async placeOrder() {
      try {
        // Check if the user is authenticated
        if (!this.isAuthenticated()) {
          console.error("User not authenticated. Please log in.");
          alert("Please log in to proceed with the order.");

          // Redirect to the login page
          this.$router.push("/login");
          return;
        }
        const user_id = this.getUserId();
        const cartId = this.getCartId();
        const response = await axios.post(
          "https://ecommerce.hyperzod.dev/api/user/place-order",
          {
            cartItems: this.cartItems,
            user_id: user_id,
            cart_id: cartId,
          },
          {
            headers: {
              Authorization: `Bearer ${this.getAuthToken()}`, // Include the auth token in the request headers
            },
          }
        );

        const orderData = response.data[0]; // Update this line to get the order data directly
        console.log("Order Data:", orderData);
        if (orderData) {
          const order_id = orderData.data.order_id; // Retrieve the order ID
          console.log("Order ID:", order_id);

          // Set the order ID in the component's data
          this.orderId = +order_id;

          // Rest of your code...
          if (orderData.status === true) {
            console.log(orderData.status);
            // Order placed successfully, update the state

            this.successMessage =
              "Order placed successfully! Redirecting to view order page...";

            // Fetch order details using the retrieved order ID

            this.$router.push(`/view-order/${this.orderId}`);
            // Rest of your code...
          }
        } else {
          console.error("Order data not found in the response.");
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  },
  mounted() {
    const cartId = this.$route.params.cartId; // Extract cart ID from the route
    console.log(cartId);
    this.cartId = cartId;
    this.fetchCartDetails(cartId);
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
