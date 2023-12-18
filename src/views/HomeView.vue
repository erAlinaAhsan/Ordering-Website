<template>
  <div class="relative overflow-hidden">
    <!-- Swiper Container -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <div
          class="swiper-slide"
          @click="
            redirectToAllCategories(require('@/assets/banner-clogs.webp'))
          "
        >
          <div class="card">
            <img
              :src="require('@/assets/banner-clogs.webp')"
              alt="Banner Image"
              class="w-1/4 h-1/4 object-cover transform transition-transform hover:scale-105"
            />
            <h6 class="font-bold text-warning mb-3">Upto 60% + Extra 10%</h6>
            <h3 class="font-bold mb-3">Special Offer</h3>
            <button href="#" class="px-2 py-1 bg-red text-black rounded">
              Shop Now
            </button>
          </div>
        </div>

        <!-- Slide 2 -->
        <div
          class="swiper-slide"
          @click="
            redirectToAllCategories(require('@/assets/banner-shoes.webp'))
          "
        >
          <div class="card">
            <img
              :src="require('@/assets/banner-shoes.webp')"
              alt="Banner Image"
              class="w-1/4 h-1/4 object-cover transform transition-transform hover:scale-105"
            />
          </div>
        </div>

        <!-- Slide 3 -->
        <div
          class="swiper-slide"
          @click="
            redirectToAllCategories(require('@/assets/banner-phones.webp'))
          "
        >
          <div class="card">
            <img
              :src="require('@/assets/banner-phones.webp')"
              alt="Banner Image"
              class="w-1/4 h-1/4 object-cover transform transition-transform hover:scale-105"
            />
          </div>
        </div>

        <!-- Slide 4 -->
        <div
          class="swiper-slide"
          @click="
            redirectToAllCategories(require('@/assets/banner-laptops.jpg'))
          "
        >
          <div class="card">
            <img
              :src="require('@/assets/banner-laptops.jpg')"
              alt="Banner Image"
              class="w-1/4 h-1/4 object-cover transform transition-transform hover:scale-105"
            />
          </div>
        </div>

        <!-- Add more slides as needed -->
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Navigation -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>

    <!-- ShopByCategory Component -->
    <ShopByCategory></ShopByCategory>

    <!-- ProductCard Component -->
    <ProductCard></ProductCard>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import ShopByCategory from "../components/ShopByCategory.vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "HomeView",
  components: {
    ShopByCategory,
    ProductCard,
  },
  data() {
    return {
      swiper: null,
    };
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(".swiper-container", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
    redirectToAllCategories() {
      // Redirect to the "All Categories" page
      this.$router.push({ name: "categories" });
    },
  },
  mounted() {
    // Initialize Swiper when the component is mounted
    this.initSwiper();
  },
};
</script>

<style scoped>
.card {
  position: relative;
}

.card h6,
.card h3,
.card button {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  color: white;
}
</style>
