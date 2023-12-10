<template>
  <div class="mb-3 mt-4">
    <div class="flex px-5">
      <div class="lg:w-8/12">
        <div x-data="{ slide: 0, sliding: null }">
          <div
            x-ref="carousel"
            x-model="slide"
            x-init="init()"
            x-data="carousel()"
            :class="{ 'cursor-grab': !sliding, 'cursor-grabbing': sliding }"
            class="relative"
          >
            <div class="absolute inset-0">
              <div class="w-full h-full bg-gray-300"></div>
            </div>
            <template x-for="(slide, index) in slides" :key="index">
              <div
                x-show="index === current"
                x-transition:enter="transition-opacity duration-1000"
                x-transition:enter-start="opacity-0"
                x-transition:enter-end="opacity-100"
                x-transition:leave="transition-opacity duration-1000"
                x-transition:leave-start="opacity-100"
                x-transition:leave-end="opacity-0"
                class="absolute inset-0"
              >
                <img
                  x-bind:src="slide.src"
                  alt="image slot"
                  class="w-full h-auto"
                />
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="lg:w-4/12 text-white">
        <div class="relative overflow-hidden mb-3">
          <img
            src="../assets/banner-clogs.webp"
            alt="img 1"
            class="w-full h-auto transform transition-transform hover:scale-105"
          />
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 text-center"
          >
            <h6 class="font-bold text-warning mb-3">Save 20%</h6>
            <h3 class="font-bold mb-3">Special Offer</h3>
            <button href="#" class="px-2 py-1 bg-warning text-black rounded">
              Shop Now
            </button>
          </div>
          <div
            class="overlay absolute top-0 left-0 w-full h-full bg-black opacity-40"
          ></div>
        </div>
        <div class="relative overflow-hidden">
          <img
            src="../assets/banner-shoes.webp"
            alt="img 2"
            class="w-full h-auto transform transition-transform hover:scale-105"
          />
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 text-center"
          >
            <h6 class="font-bold text-warning mb-3">Save 20%</h6>
            <h3 class="font-bold mb-3">Special Offer</h3>
            <button href="#" class="px-2 py-1 bg-warning text-black rounded">
              Shop Now
            </button>
          </div>
          <div
            class="overlay absolute top-0 left-0 w-full h-full bg-black opacity-40"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function carousel() {
  return {
    current: 0,
    slides: [
      { src: "../assets/banner-phones.jpg" },
      { src: "../assets/banner-laptops.jpg" },
      { src: "../assets/banner-bags.jpg" },
    ],
    isSliding: false,
    init() {
      setInterval(() => {
        this.isSliding = true;
        setTimeout(() => {
          this.isSliding = false;
          this.current = (this.current + 1) % this.slides.length;
        }, 1000);
      }, 4000);
    },
  };
}

export default {
  name: "HelloWorld",
};
</script>

<style scoped>
.image {
  position: relative;
  height: 242px;
}

.overlay {
  background: rgba(0, 0, 0, 0.4);
}

.offer-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}

.image img {
  width: 100%;
  height: 100%;
  transition: transform 0.7s ease;
}
</style>
