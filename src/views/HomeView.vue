<template>
  <div>
    <div class="w-full h-1/2 relative">
      <!-- Slideshow container -->
      <div
        class="w-full h-full flex transition-transform duration-500 ease-in-out transform"
        :style="{ transform: `translateX(-${currentImage * 100}%)` }"
      >
        <!-- Image 1 -->
        <div class="w-full h-full">
          <div class="card" @click="redirectToAllCategories(require('@/assets/banner-clogs.webp'))">
            <img
              :src="require('@/assets/banner-clogs.webp')"
              alt="Banner Image"
              class="w-full h-full object-cover transform transition-transform hover:scale-105"
            />
          </div>
        </div>
        <!-- Image 2 -->
        <div class="w-full h-full">
          <div class="card" @click="redirectToAllCategories(require('@/assets/banner-shoes.webp'))">
            <img
              :src="require('@/assets/banner-shoes.webp')"
              alt="Banner Image"
              class="w-full h-full object-cover transform transition-transform hover:scale-105"
            />
          </div>
        </div>
        <div class="w-full h-full">
          <div class="card" @click="redirectToAllCategories(require('@/assets/banner-phones.webp'))">
            <img
              :src="require('@/assets/banner-phones.webp')"
              alt="Banner Image"
              class="w-full h-full object-cover transform transition-transform hover:scale-105"
            />
          </div>
        </div>
        <!-- Image 3 -->
        <div class="w-full h-full">
          <div class="card" @click="redirectToAllCategories(require('@/assets/banner-laptops.jpg'))">
            <img
              :src="require('@/assets/banner-laptops.jpg')"
              alt="Banner Image"
              class="w-full h-full object-cover transform transition-transform hover:scale-105"
            />
          </div>
        </div>
        <!-- Add more images as needed -->
      </div>
      <!-- Dots for navigation -->
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2">
        <span
          v-for="(dot, index) in 4" 
          :key="index"
          @click="changeImage(index)"
          class="inline-block w-3 h-3 rounded-full bg-gray-300 mx-2 cursor-pointer"
          :class="{ 'bg-gray-600': index === currentImage }"
        ></span>
      </div>
    </div>
    <ShopByCategory></ShopByCategory>
    <ProductCard></ProductCard>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import ShopByCategory from "../components/ShopByCategory.vue";

export default {
  name: "HomeView",
  components: {
    ShopByCategory,
    ProductCard,
  },
  data() {
    return {
      currentImage: 0,
    };
  },
  mounted() {
    // Start the slideshow
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.currentImage = (this.currentImage + 1) % 4; 
      }, 2000); // Change image every 2 seconds (adjust as needed)
    },
    changeImage(index) {
      // Change the current image index
      this.currentImage = index;
    },
    redirectToAllCategories() {
      // Redirect to the "All Categories" page
      this.$router.push({ name: "categories" });
    },
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
