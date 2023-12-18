<template>
  <div class="flex justify-center mt-8">
    <div class="w-full md:w-8/12 lg:w-6/12">
      <div class="hover:shadow-xl transition duration-300 ease-in-out">
        <img
          v-if="product.image"
          :src="product.image"
          class="w-full h-64 object-cover"
        />

        <div class="p-4 bg-white">
          <h1 class="text-lg font-semibold">{{ product.name }}</h1>
          <p class="text-md text-gray-600">{{ product.price }}</p>
          <p class="text-md text-gray-600">{{ product.description }}</p>

          <div class="flex mt-4">
            <button
              class="mt-2 mr-4 bg-gray-200 text-gray-800 px-4 py-2 rounded"
              @click="addToCart(product)"
            >
              ADD TO CART
            </button>
            <div v-if="successMessage" class="text-green-500">
              {{ successMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      successMessage: null,
    };
  },
  methods: {
    addToCart(product) {
      // Make a POST request to add the product to the shopping cart
      axios
        .post("https://ecommerce.hyperzod.dev/api/user/cart/add", {
          product_id: product.id,
          quantity: 1, // You can adjust the quantity as needed
        })
        .then(() => {
          this.successMessage = "Product added to cart successfully!";
          // You may choose to redirect to the cart after a delay
          setTimeout(() => {
            this.successMessage = null;
          }, 2000);
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Add styles as needed */
</style>
