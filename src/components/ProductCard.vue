<template>
  <div class="container">
    <br />
    <h1 class="text-xl font-medium mb-6">You may also like</h1>
    <div class="product-container">
      <template v-if="!loading">
        <router-link
          v-for="product in products"
          :key="product.id"
          :to="{
            name: 'ProductDetails',
            params: { id: product.id },
            query: { product: JSON.stringify(product) },
          }"
        >
          <img :src="product.image" alt="Product Image" class="product-image" />
          <div class="product-details">
            <p class="font-semibold">{{ product.name }}</p>
            <!-- <button class="add-to-cart-btn" @click="addToCart(product)">
              ADD TO CART
            </button> -->
          </div>
        </router-link>
      </template>

      <template v-else>
        <!-- Skeleton loader for the product cards -->
        <div class="skeleton-loader">
          <div v-for="index in 10" :key="index" class="skeleton-box"></div>
        </div>
      </template>
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

        // Shuffle the products randomly
        const shuffledProducts = response.data.data.sort(
          () => Math.random() - 0.5
        );

        // Take the first 10 products
        this.products = shuffledProducts.slice(0, 10);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        this.loading = false;
      }
    },
    // addToCart(product) {
    //   axios
    //     .post("https://ecommerce.hyperzod.dev/api/user/cart/add", {
    //       productId: product.id,
    //       quantity: 1, // You can adjust the quantity as needed
    //     })
    //     .then(() => {
    //       // Redirect to the shopping cart page
    //       this.$router.push({ name: "cart" });
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
.skeleton-loader {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.skeleton-box {
  width: 300px;
  height: 250px;
  background-color: #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
}
.container {
  padding: 0 1.5rem;
}

.product-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.product-card {
  width: calc(100% - 1rem); /* 25% width with 1rem gap */
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  text-decoration: none; /* Remove default link styling */
}

.product-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.product-details {
  text-align: center;
}

.add-to-cart-btn {
  background-color: #3490dc;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #2779bd;
}
@media (max-width: 768px) {
  .product-container {
    grid-template-columns: 1fr;
  }
}
</style>
