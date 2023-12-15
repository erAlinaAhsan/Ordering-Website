<template>
  <div class="flex justify-center mt-8">
    <div class="w-full">
      <div class="flex flex-wrap -mx-4">
        <router-link
          v-for="product in products"
          :key="product.id"
          class="md:w-4/12 sm:w-6/12 xs:w-full px-4 mb-8"
          :to="{
            name: 'ProductDetails',
            params: { id: product.id },
            query: { product: JSON.stringify(product) },
          }"
        >
          <div class="hover:shadow-xl transition duration-300 ease-in-out">
            <img
              v-if="product.image"
              :src="product.image"
              class="w-full h-64 object-cover"
            />
            <div class="p-4 bg-white">
              <p class="text-lg font-semibold">{{ product.name }}</p>
              <button
                class="mt-2 mr-4 bg-gray-200 text-gray-800 px-4 py-2 rounded"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      baseURL: "https://ecommerce.hyperzod.dev/api/user/products",
      products: [],
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get(this.baseURL);
        console.log(response);
        this.products = response.data.data.map((product) => ({
          ...product,
          showDetails: false,
        }));
        this.loading = false;
      } catch (error) {
        console.error("API Error:", error);
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
/* Add styles as needed */
</style>
