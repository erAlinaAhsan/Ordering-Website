<!-- ViewOrder.vue -->

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-light text-center py-4">VIEW ORDER</h1>

    <!-- Display order details here -->
    <div>
      <!-- Add your order details rendering logic here -->
      <p v-if="orderDetails">Order ID: {{ orderDetails.orderId }}</p>
      <!-- Display other order details as needed -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      orderDetails: null, // Placeholder for order details
    };
  },
  methods: {
    // Fetch order details from the API
    async fetchOrderDetails() {
      // Replace the following URL with your actual API endpoint for fetching order details
      const orderId = this.$route.params.orderId;
      const apiUrl = `https://ecommerce.hyperzod.dev/api/user/order/${orderId}`;

      try {
        const response = await axios.get(apiUrl);
        this.orderDetails = response.data.data; // Adjust this based on your API response structure
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  },
  mounted() {
    this.fetchOrderDetails();
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
