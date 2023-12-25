<template>
  <div class="flex justify-center mt-8">
    <div class="w-full">
      <div class="flex flex-wrap -mx-4">
        <template v-if="!loading">
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
                <!-- <button
                  class="mt-2 mr-4 bg-gray-200 text-gray-800 px-4 py-2 rounded"
                  @click="addToCart(product)"
                >
                  ADD TO CART
                </button> -->
              </div>
            </div>
          </router-link>
        </template>

        <template v-else>
          <!-- Skeleton loader for product cards -->
          <div
            v-for="index in 6"
            :key="index"
            class="md:w-4/12 sm:w-6/12 xs:w-full px-4 mb-8"
          >
            <div class="skeleton-box"></div>
          </div>
        </template>
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
      loading: true,
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
      } finally {
        this.loading = false;
      }
    },
    // addToCart(product) {
    //   // Make a POST request to add the product to the shopping cart
    //   axios
    //     .post("https://ecommerce.hyperzod.dev/api/user/cart/add", {
    //       product_id: product.id,
    //       quantity: 1, // You can adjust the quantity as needed
    //     })
    //     .then(() => {
    //       // Reload cart details after adding the product
    //       this.fetchCartDetails();
    //     })
    //     .catch((error) => {
    //       console.error("API Error:", error);
    //     });
    // },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.skeleton-box {
  width: 100%;
  height: 300px;
  background-color: #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
}
</style>
