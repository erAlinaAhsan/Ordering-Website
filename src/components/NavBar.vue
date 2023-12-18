<template>
  <div>
    <div class="flex items-center bg-gray-800 p-4">
      <h1 class="text-white font-semibold text-xl">Qart</h1>

      <div class="my-auto mt-1 ml-auto relative">
        <input
          type="text"
          class="p-2 rounded border-none"
          placeholder="Search..."
          v-model="searchQuery"
          @input="searchProducts"
        />
        <ul
          v-show="searchResults.length > 0"
          class="absolute bg-white border rounded mt-2 w-full"
        >
          <router-link
            :to="getProductLink(product)"
            v-for="product in searchResults"
            :key="product.id"
            class="p-2"
          >
            {{ product.name }}
          </router-link>
        </ul>
      </div>

      <div class="ml-auto">
        <button>
          <img
            :src="require('@/assets/navcart.png')"
            alt="Cart"
            class="w-12 h-10"
            @click="redirectToCart"
          />
        </button>
        <button
          class="mt-2 bg-gray-200 text-gray-800 px-4 py-2 rounded"
          @click="redirectToLogin"
        >
          Login
        </button>
      </div>
    </div>

    <div class="p-4">
      <!-- Display router view for other content -->
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchQuery: "",
      searchResults: [],
      allProducts: [],
    };
  },
  methods: {
    async fetchAllProducts() {
      try {
        const response = await axios.get(
          "https://ecommerce.hyperzod.dev/api/user/products"
        );
        this.allProducts = response.data.data;
      } catch (error) {
        console.error("API Error:", error);
      }
    },

    async searchProducts() {
      try {
        const response = await axios.get(
          `https://ecommerce.hyperzod.dev/api/products/search?query=${encodeURIComponent(
            this.searchQuery
          )}`
        );

        this.searchResults = response.data.data;
      } catch (error) {
        console.error("API Error:", error);
      }
    },

    getProductLink(product) {
      if (product.category) {
        // If the product has a category, redirect to the products page under that category
        return {
          name: "ProductsByCategory",
          query: { category: product.category },
        };
      } else {
        // Otherwise, redirect to the product details page
        return {
          name: "ProductDetails",
          params: { id: product.id },
          query: { product: JSON.stringify(product) },
        };
      }
    },
    redirectToCart() {
      this.$router.push("/cart");
    },
    redirectToLogin() {
      this.$router.push("/login");
    },
  },
  mounted() {
    this.fetchAllProducts();
  },
};
</script>
