<template>
  <div class="relative overflow-hidden">
    <div class="w-full h-1/2 flex items-center">
      <!-- Slideshow container -->
      <div
        class="w-full h-full flex transition-transform duration-500 ease-in-out transform"
        :style="{ transform: `translateX(-${currentImage * 25}%)` }"
      >
        <!-- Image 1 -->
        <div class="w-full h-full">
          <div class="card">
            <img
              :src="require('@/assets/banner-clogs.webp')"
              alt="Banner Image"
              class="w-full h-full object-cover transform transition-transform hover:scale-105"
            />
            <h6 class="font-bold text-warning mb-3">Upto 60% + Extra 10%</h6>
            <h3 class="font-bold mb-3">Special Offer</h3>
            <button href="#" class="px-2 py-1 bg-red text-black rounded">
              Shop Now
            </button>
          </div>
        </div>

        <!-- Image 2 -->
        <div class="w-full h-full">
          <div class="card">
            <img
              :src="require('@/assets/banner-shoes.webp')"
              alt="Banner Image"
              class="w-full h-full object-cover transform transition-transform hover:scale-105"
            />
          </div>
        </div>

        <div class="w-full h-full">
          <div class="card">
            <img
              :src="require('@/assets/banner-phones.webp')"
              alt="Banner Image"
              class="w-full h-full object-cover transform transition-transform hover:scale-105"
            />
          </div>
        </div>

        <!-- Image 3 -->
        <div class="w-full h-full">
          <div class="card">
            <img
              :src="require('@/assets/banner-laptops.jpg')"
              alt="Banner Image"
              class="w-full h-full object-cover transform transition-transform hover:scale-105"
            />
          </div>
        </div>

        <!-- Image 4 -->
        <div class="w-full h-full">
          <div class="card">
            <img
              :src="require('@/assets/banner-bags.jpg')"
              alt="Banner Image"
              class="w-full h-full object-cover transform transition-transform hover:scale-105"
            />
          </div>
        </div>
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
        this.currentImage = (this.currentImage + 1) % 4; // Change the number based on the number of images
      }, 2000); // Change image every 5 seconds (adjust as needed)
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
