<template>
  <div v-if="!loading" class="container mx-auto p-4">
    <h1 class="text-3xl font-medium text-center py-4">VIEW ORDER</h1>

    <h2 class="text-2xl font-medium text-left py-4">YOUR ORDER</h2>
    <div v-if="order">
      <p class="background">Order ID: {{ order[0].id }}</p>
      <p>Total Price: &#8377;{{ order[0].total_price }}</p>
      <p>Status: {{ order[0].status }}</p>
      <p>Payment Status: {{ order[0].payment_status }}</p>
      <p>Delivery Address: {{ order[0].delivery_address }}</p>
      <p>Delivery Method: {{ order[0].delivery_method }}</p>
      <p>Created At: {{ order[0].created_at }}</p>
      <br />

      <h2 class="text-2xl font-medium text-left py-4">
        YOUR ORDERED PRODUCT DETAILS
      </h2>

      <div v-for="(product, index) in productArray" :key="index">
        <hr class="my-2" />
        <p class="background">Product ID: {{ product.product_id }}</p>
        <p>Quantity: {{ product.quantity }}</p>
        <p>Product Name: {{ product.product.name }}</p>
        <p>Product Price: &#8377;{{ product.product.price }}</p>
      </div>
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
        console.log("Order Response:", response.data);
        // Assign the order directly
        this.order = response.data.data[0] || null;
        this.productArray = response.data.data[1] || null;
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
    setTimeout(() => {
      this.loading = false;
    }, 1000);
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
.background {
  background-color: rgb(190, 187, 187);
}
/* Add any custom styles here */
</style>
