<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <template v-if="!loadingCategories">
        <div
          v-for="category in categories"
          :key="category.id"
          class="md:w-5/12 sm:w-5/12 xs:w-full"
          @click="loadProductsByCategory(category.id)"
        >
          <div class="md:w-7/12 sm:w-7/12 xs:w-full">
            <div class="pl-6">
              <p class="text-2xl font-semibold">{{ category.name }}</p>
              <div class="p-0">
                <p class="text-md text-gray-600">
                  {{ category.price }}
                  <!-- <del class="text-lg font-thin">{{product.price + 20$}}</del> -->
                </p>
                <p class="text-md text-gray-600">
                  {{ category.description }}
                </p>

                <div class="flex mt-4">
                  <button class="mt-2 bg-gray-200 text-black px-4 py-2 rounded">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <!-- Skeleton loader for categories -->
        <div
          v-for="index in 6"
          :key="index"
          class="md:w-5/12 sm:w-5/12 xs:w-full"
        >
          <div class="skeleton-box"></div>
        </div>
      </template>
    </div>
  </div>

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
        <template v-if="!loadingRecommendations">
          <div class="md:w-4/12 sm:w-4/12">
            <div
              class="hover:shadow-xl transition duration-300 ease-in-out"
              @click="loadProductsByCategory(3)"
            >
              <img
                :src="require('@/assets/bannner-bags.jpeg')"
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
        </template>

        <template v-else>
          <!-- Skeleton loader for product recommendations -->
          <div v-for="index in 6" :key="index" class="md:w-4/12 sm:w-4/12">
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
      baseURL: "https://ecommerce.hyperzod.dev/api/categories",
      categories: [],
      loadingCategories: true,
      loadingRecommendations: true,
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get(this.baseURL);
        console.log(response);
        this.categories = response.data.data;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        this.loadingCategories = false;
      }
    },
    loadProductsByCategory(categoryId) {
      // Use the router to navigate to the CategoryProducts page with the selected category ID
      this.$router.push({
        name: "category-products",
        query: { categoryId: categoryId },
      });
    },
  },
  mounted() {
    this.fetchCategories();
    // You may want to add a similar method to fetch product recommendations
    // this.fetchRecommendations();
  },
};
</script>

<style scoped>
.skeleton-box {
  width: 450px;
  height: 300px;
  background-color: #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
}
</style>
