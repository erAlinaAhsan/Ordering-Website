<template>
  <div>
    <div
      class="parallax-slider-navigation"
      style="display: flex; justify-content: space-between; padding: 1rem"
    ></div>
    <swiper
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
import image1 from "../assets/clogs.jpg";
import image2 from "../assets/banner-bags.jpg";
import image3 from "../assets/banner-phones.jpg";
import image4 from "../assets/banner-hoodies.jpg";
import image5 from "../assets/banner-jackets.jpg";
import image6 from "../assets/banner-sale.jpg";
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
        {
          id: 5,
          imageUrl: image5,
        },
        {
          id: 6,
          imageUrl: image6,
        },
      ],
    };
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
