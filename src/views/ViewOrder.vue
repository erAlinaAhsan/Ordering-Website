<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-light text-center py-4">VIEW ORDER</h1>

    <!-- Display order details here -->
    <div v-if="order">
      <p>Order ID: {{ order.id }}</p>
      <p>Total Price: {{ order.total_price }}</p>
      <p>Status: {{ order.status }}</p>
      <p>Payment Status: {{ order.payment_status }}</p>
      <p>Delivery Address: {{ order.delivery_address }}</p>
      <p>Delivery Method: {{ order.delivery_method }}</p>
      <p>Created At: {{ order.created_at }}</p>

      <hr class="my-4" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      order: null, // Use an object to store the single order
    };
  },
  methods: {
    // Fetch the single order for the authenticated user
    async fetchOrder() {
      // Extract the order ID from the route params
      const orderId = this.$route.params.orderId;
      const apiUrl = `https://ecommerce.hyperzod.dev/api/user/orders/${orderId}`;

      try {
        const authToken = this.getAuthToken();
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        // Assign the order directly
        this.order = response.data.data[0] || null;
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
    this.fetchOrder();
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
