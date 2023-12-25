<template>
  <div class="home-view">
    <template v-if="loading">
      <!-- Loading skeleton covering the entire home view -->
      <div class="skeleton-loader-container">
        <div class="skeleton-rectangular-box" v-for="n in 10" :key="n"></div>
      </div>
    </template>

    <template v-else>
      <!-- Actual content when not loading -->
      <nav class="flex-div1">
        <button
          class="mt-1 bg-gray-200 text-gray-800 px-4 py-2 rounded"
          @click="redirectToAllProducts"
        >
          Browse Products
        </button>
        <h4
          class="mt-1 bg-gray-200 text-gray-800 px-4 py-2 rounded"
          v-for="category in categories"
          :key="category.id"
          @click="loadProductsByCategory(category.id)"
        >
          {{ category.name }}
        </h4>
      </nav>
    </template>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
      loading: true,
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get(
          "https://ecommerce.hyperzod.dev/api/categories"
        );
        this.categories = response.data.data;
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        this.loading = false;
      }
    },
    redirectToAllProducts() {
      this.$router.push({
        name: "products",
      });
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
  },
};
</script>







        
 <style>
nav.flex-div1 {
  display: flex;
  /* flex-wrap: wrap; */

  align-items: center;

  /* position: absolute; */
  justify-content: space-evenly;
  margin-top: 55px;
  /* margin-left: 100px; */
  /* overflow-x: hidden; */
  overflow: scroll;
  /* width: 100%; */
}
::-webkit-scrollbar {
  width: 8px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background-color: #fff; /* Track color */
}

.tags:first-child {
  margin-left: 540px;
}

button,
button:hover,
h4:hover {
  /* padding: 12px; */
  /* transition: padding 0.4s ease; */
  /* border-radius: 5px; */
  background-color: rgb(112, 113, 122);
  cursor: pointer;
  /* color: black; */
}

@media (max-width: 768px) {
  nav.flex-div1 {
    flex-direction: column; /* Change the flex direction to column for small screens */
    justify-content: center;
    align-items: flex-start;
  }
  nav.flex-div1 h4,
  nav.flex-div1 button {
    width: 100%;
    box-sizing: border-box;
  }
}

/* .flex-div1 button:hover {
  background-color: #f0f0f0;
} */

.skeleton-loader-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.skeleton-rectangular-box {
  width: 100px;
  height: 50px;
  background-color: #ccc;
  margin: 10px;
  border-radius: 8px;
}
</style>
