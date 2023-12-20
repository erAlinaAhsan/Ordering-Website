<template>
  <div>
    <div class="flex items-center bg-gray-800 p-4">
      <div class="flex items-center">
        <h1 class="text-white font-semibold text-xl mr-4" @click="redirectToHome">Qart</h1>
        <button @click="redirectToCart">
          <img
            :src="require('@/assets/navcart.png')"
            alt="Cart"
            class="w-12 h-10"
          />
        </button>
      </div>

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
        <!-- Dropdown Button -->
        <div class="relative" @click="toggleDropdown">
          <button class="mt-2 bg-gray-200 text-gray-800 px-4 py-2 rounded">
            Account
          </button>
          <ul
            v-show="dropdownOpen"
            class="absolute bg-white border rounded mt-2 w-40"
          >
            <li @click="redirectToSignUp" class="p-2 cursor-pointer">SignUp</li>
            <li @click="redirectToLogin" class="p-2 cursor-pointer">Login</li>
            <li @click="redirectToLogout" class="p-2 cursor-pointer">Logout</li>
            <li @click="redirectToAllOrders" class="p-2 cursor-pointer">
              Orders
            </li>
          </ul>
        </div>
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
      dropdownOpen: false,
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
      // Try to retrieve cartId from local storage
      const storedCartId = localStorage.getItem("cartId");

      if (storedCartId) {
        // If cartId is stored, redirect to the cart route with that ID
        this.$router.push(`/cart/${storedCartId}`);
      } else {
        // If no cartId in local storage, display an error or handle as needed
        console.error("Cart ID not found in local storage");
      }
    },
    redirectToSignUp() {
      this.$router.push("/register");
    },

    redirectToLogin() {
      this.$router.push("/login");
    },

    redirectToAllOrders() {
      this.$router.push("/all-orders");
    },

    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },

    async redirectToLogout() {
      const confirmLogout = confirm("Are you sure you want to log out?");
      if (confirmLogout) {
        const token = localStorage.getItem("authToken");
        if (token) {
          try {
            // Call your logout API here, replace the URL with your actual logout endpoint
            await axios.post(
              "https://ecommerce.hyperzod.dev/api/user/logout",
              {}, // You may pass any additional data required for logout
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            // Clear the token from local storage or any other cleanup steps
            localStorage.removeItem("authToken");

            // Redirect to the login page
            this.$router.push("/login");
          } catch (error) {
            console.error("Logout Error:", error);
          }
        }
      }
    },
    redirectToHome() {
      this.$router.push("/home")
    }
  },
  mounted() {
    this.fetchAllProducts();
  },
};
</script>
