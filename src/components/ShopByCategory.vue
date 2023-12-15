<template>
  <div class="category-section">
    <nav class="flex-div1">
      <h4
        class="tags"
        v-for="category in categories"
        :key="category.id"
        @click="loadProductsByCategory(category.id)"
      >
        {{ category.name }}
      </h4>
    </nav>

    <div class="product-container">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-card"
      >
        <img :src="product.image" alt="Product Image" class="product-image" />
        <div class="product-details">
          <p class="font-semibold">{{ product.name }}</p>
          <button class="add-to-cart-btn">ADD TO CART</button>
        </div>
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
      categories: [],
      products: [],
      selectedCategoryId: null,
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
    async loadProductsByCategory(categoryId) {
      try {
        const response = await axios.get(
          `https://ecommerce.hyperzod.dev/api/user/products/${categoryId}`
        );
        this.products = response.data.data;
        this.selectedCategoryId = categoryId;
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  },
  computed: {
    filteredProducts() {
      // If a category is selected, filter products by categoryId
      return this.selectedCategoryId
        ? this.products.filter(
            (product) => product.categoryId === this.selectedCategoryId
          )
        : this.products;
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
.tags {
  display: flex;
  justify-content: flex-start;
  align-self: center;
  border: 1px solid #ccc;
  padding: 10px;
  color: #9e9e9e;
  border-radius: 5px;
  width: fit-content;

  border: 0;
  outline: 0;
  font-size: 14px;
  background-color: rgb(26, 25, 25);
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px;
}
.tags:first-child {
  margin-left: 540px;
}

h4:hover {
  /* padding: 12px; */
  /* transition: padding 0.4s ease; */
  /* border-radius: 5px; */
  background-color: rgb(48, 47, 47);
  /* color: black; */
}

/* .flex-div1 button:hover {
  background-color: #f0f0f0;
} */
</style>
