<template>
  <div class="flex justify-center mt-8">
    <div class="w-full md:w-8/12 lg:w-6/12">
      <div>
        <img v-if="product.image" :src="product.image" class="product-image" />

        <div class="p-4 bg-white">
          <h1 class="text-lg font-semibold">{{ product.name }}</h1>
          <p class="text-md text-gray-600">&#8377;{{ product.price }}</p>
          <p class="text-md text-gray-600">{{ product.description }}</p>

          <div class="flex mt-4">
            <button
              class="mt-2 mr-4 bg-gray-200 text-gray-800 px-4 py-2 rounded"
              @click="addToCart(product)"
            >
              ADD TO CART
            </button>
            <div v-if="successMessage" class="text-red-600">
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
    getCartId() {
      return localStorage.getItem("cartId");
    },
    setCartId(id) {
      localStorage.setItem("id", id);
    },

    getAuthToken() {
      return localStorage.getItem("authToken");
    },

    getUserId() {
      let user_id = localStorage.getItem("user_id");
      return +user_id;
    },

    isAuthenticated() {
      return !!this.getAuthToken();
    },

    async addToCart(product) {
      try {
        let id = this.getCartId();
        const authToken = this.getAuthToken();

        let requestData = {
          product_id: product.id,
          quantity: 1,
          user_id: null,
        };
        if (id) {
          requestData.cart_id = +id;
        }
        // Include user_id in the request if authenticated
        if (this.isAuthenticated() && this.getUserId()) {
          requestData.user_id = this.getUserId();
        } else {
          requestData.user_id = null;
          console.error("User not authenticated. Please log in.");
          alert("Please log in to proceed with adding to cart.");

          // Redirect to the login page
          this.$router.push("/login");
          return;
        }

        const response = await axios.post(
          "https://ecommerce.hyperzod.dev/api/cart/add",
          requestData,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        console.log(response);

        const cartData = response.data[0].data; // Extract cart data from the response
        const cartId = cartData.id;
        // Update the local storage with the new Cart ID
        localStorage.setItem("cartId", cartId);

        this.successMessage = "Added to cart!";

        setTimeout(() => {
          this.successMessage = null;
        }, 2000);
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
