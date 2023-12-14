<template>
  <div class="flex justify-center mt-8">
    <div class="w-full">
      <div class="flex">
        <div class="md:w-4/12 sm:w-4/12">
          <div v-for="product in products" :key="product.id">
            <div class="hover:shadow-xl transition duration-300 ease-in-out">
              <img
                v-if="product.image"
                :src="product.image"
                class="w-3/5 h-64 object-cover"
              />

              <div class="p-4 bg-white">
                <p class="text-lg font-semibold">{{ product.name }}</p>
                <p class="text-sm text-gray-600">{{ product.price }}</p>
                <p class="text-sm text-gray-600">{{ product.description }}</p>
                <button
                  class="mt-2 mr-4 bg-gray-200 text-gray-800 px-4 py-2 rounded"
                >
                  ADD TO CART
                </button>
                <button
                  class="mt-2 bg-gray-200 text-gray-800 px-4 py-2 rounded"
                >
                  ADD TO WISHLIST
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="md:w-4/12 sm:w-4/12 xs:w-full px-4 mb-8"
      >
        <div
          class="card-container hover:shadow-lg transition duration-300 ease-in-out"
        >
          <img
            v-if="product.image"
            :src="product.image"
            alt="Product Image"
            class="w-full h-64 object-cover rounded-t"
          />

          <div class="p-6">
            <p class="text-2xl font-semibold">{{ product.name }}</p>
            <div class="p-0">
              <p class="text-md text-gray-600">{{ product.price }}</p>
              <p class="text-md text-gray-600">{{ product.description }}</p>

              <div class="flex mt-4">
                <button
                  class="mt-2 mr-4 bg-gray-200 text-gray-800 px-4 py-2 rounded"
                >
                  ADD TO CART
                </button>
                <button
                  class="mt-2 bg-gray-200 text-gray-800 px-4 py-2 rounded"
                >
                  ADD TO WISHLIST
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div class="flex justify-center mt-8">
    <div class="w-full">
      <div>
        <p class="text-xl font-light">YOU MIGHT ALSO LIKE</p>
        <hr class="border-t-2 border-gray-300 my-4" />
        <div class="flex justify-center mt-4">
          <!-- Replace this with your own product recommendations implementation -->
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center mt-8">
    <div class="w-full">
      <div class="flex">
        <div class="md:w-4/12 sm:w-4/12">
          <div class="hover:shadow-xl transition duration-300 ease-in-out">
            <img
              :src="require('@/assets/banner-bags.jpg')"
              alt="Product Image"
              class="w-1/2 h-64 object-cover"
            />

            <div class="p-4 bg-white">
              <p class="text-lg font-semibold">Bags & Purses</p>
              <p class="text-sm text-gray-600">Upto 60% + Extra 10%</p>
              <p class="text-sm text-gray-600">Baggit, Zara, Fossil</p>
              <button class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Explore
              </button>
            </div>
          </div>
        </div>
        <!-- Add more product cards similarly -->
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
        this.products = response.data.data;
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
</style>
