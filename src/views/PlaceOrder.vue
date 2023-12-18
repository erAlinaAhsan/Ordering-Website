<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-light text-center py-4">PLACE ORDER</h1>

    <!-- Order Summary -->
    <div class="w-full md:w-2/3 mx-auto p-4 bg-gray-200 rounded">
      <p class="text-xl font-bold mb-4">Order Summary</p>
      <table class="w-full">
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index">
            <td>
              <div class="flex items-center">
                <img
                  :src="item.image"
                  alt="Product Image"
                  class="w-12 h-12 object-cover rounded mr-2"
                />
                <div>
                  <p class="font-bold">{{ item.name }}</p>
                  <p class="text-sm">{{ item.description }}</p>
                </div>
              </div>
            </td>
            <td class="text-right">{{ formatCurrency(item.price) }}</td>
            <td class="text-right">{{ item.quantity }}</td>
            <td class="text-right">{{ formatCurrency(item.total) }}</td>
          </tr>
        </tbody>
      </table>

      <div class="mt-4">
        <p class="text-right font-bold">
          Order Subtotal: {{ formatCurrency(orderSummary.subtotal) }}
        </p>
        <p class="text-right">
          Shipping Charges: {{ formatCurrency(orderSummary.shippingCharges) }}
        </p>
        <p class="text-right">Tax: {{ formatCurrency(orderSummary.tax) }}</p>
        <p class="text-right font-bold">
          Total: {{ formatCurrency(orderSummary.total) }}
        </p>
      </div>
    </div>

    <!-- Additional Information or Form Fields -->
    <div class="mt-6">
      <p class="text-xl font-bold mb-4">Shipping Information</p>
      <!-- Add form fields for shipping information -->
      <!-- Example: -->
      <form @submit.prevent="placeOrder">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Full Name</label
          >
          <input
            type="text"
            id="name"
            v-model="shippingInfo.fullName"
            class="mt-1 p-2 border w-full"
            required
          />
        </div>
        <!-- Add more form fields as needed (address, city, etc.) -->
        <div class="text-center">
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded"
          >
            PLACE ORDER
          </button>
        </div>
      </form>
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
      shippingInfo: {
        fullName: "",
        // Add more fields as needed (address, city, etc.)
      },
    };
  },
  methods: {
    async fetchCartDetails() {
      // ... existing code ...
    },
    formatCurrency(value) {
      // Format currency as needed
      // Example: return `$${value.toFixed(2)}`;
    },
    placeOrder() {
      // Example: Make a POST request to place the order
      axios
        .post("https://example.com/api/place-order", {
          cartItems: this.cartItems,
          orderSummary: this.orderSummary,
          shippingInfo: this.shippingInfo,
        })
        .then((response) => {
          // Handle successful order placement
          console.log("Order placed:", response.data);
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    },
  },
  mounted() {
    this.fetchCartDetails();
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
