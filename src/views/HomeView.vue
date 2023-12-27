<template>
  <div>
    <div
      v-if="!loading"
      class="parallax-slider-navigation"
      style="display: flex; justify-content: space-between; padding: 1rem"
    ></div>

    <swiper
      v-if="!loading"
      class="parallax-slider"
      parallax
      grabCursor
      :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
    >
      <swiper-slide v-for="image in images" :key="image.id">
        <router-link :to="{ name: 'categories' }">
          <img :src="image.imageUrl" class="w-full" />
        </router-link>
      </swiper-slide>
      ...
    </swiper>
    <div v-else class="skeleton-loader-banner">
      <!-- You can customize the skeleton loader elements and styles -->
      <div class="skeleton-box" v-for="n in 1" :key="n"></div>
    </div>
    <ShopByCategory></ShopByCategory>
    <ProductCard></ProductCard>
  </div>
</template>

<script>
// import SwiperCore, { Navigation, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import ProductCard from "../components/ProductCard.vue";
import ShopByCategory from "../components/ShopByCategory.vue";
import "swiper/css";
import "swiper/css/navigation";
import image1 from "../assets/banner1.png";
import image2 from "../assets/banner2.png";
import image3 from "../assets/banner3.png";
import image4 from "../assets/banner4.png";
// SwiperCore.use([Navigation, Parallax, Scrollbar, A11y]);
export default {
  name: "HomeView",
  components: {
    Swiper,
    SwiperSlide,
    // FontAwesomeIcon,
    ShopByCategory,
    ProductCard,
  },
  data() {
    return {
      loading: true,
      parallaxSwiperWidth: 0,
      images: [
        {
          id: 1,
          imageUrl: image1,
        },
        {
          id: 2,
          imageUrl: image2,
        },
        {
          id: 3,
          imageUrl: image3,
        },
        {
          id: 4,
          imageUrl: image4,
        },
      ],
    };
  },
  mounted() {
    // Simulate an asynchronous operation like data fetching
    setTimeout(() => {
      this.loading = false;
    }, 1000);
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
.skeleton-loader-banner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.skeleton-box {
  width: 90%;
  height: 400px;
  background-color: #ccc;
  margin: 10px;
  border-radius: 8px;
}
</style>
