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
    async addToCart(product) {
      try {
        const response = await axios.post(
          "https://ecommerce.hyperzod.dev/api/cart/add",
          {
            product_id: product.id,
            quantity: 1,
          }
        );
        const cartId = response.data.data.cart.id; // Extract cart ID from the response
        this.successMessage = "Product added to cart successfully!";
        setTimeout(() => {
          this.successMessage = null;
        }, 2000);
        this.$router.push(`/cart/${cartId}`); // Redirect to the cart with the cart ID
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add styles as needed */
</style>
