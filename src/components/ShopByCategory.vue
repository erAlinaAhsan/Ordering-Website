<template>
  <div class="category-section">
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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

::-webkit-scrollbar-thumb {
  background-color: #a0a0a0; /* Thumb color */
  border-radius: 4px; /* Round the corners of the thumb */
}

::-webkit-scrollbar-track {
  background-color: #f0f0f0; /* Track color */
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

/* .flex-div1 button:hover {
  background-color: #f0f0f0;
} */
</style>
