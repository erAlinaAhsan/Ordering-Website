<template>
  <div class="relative overflow-hidden">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${(activeBtn - 1) * 100}%)` }"
    >
      <div v-for="(item, index) in items" :key="index" class="w-full h-full">
        <label :for="`slide${index + 1}`" class="w-full h-full">
          <div
            class="bg-cover bg-center h-full"
            :style="{ backgroundImage: `url('${item.image}')` }"
          >
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-5xl text-white font-extrabold sm:hidden">
                {{ item.title }}
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Click Me", image: "@/assets/banner-bags.jpg" },
        { title: "Click Me", image: "@/assets/banner-clogs.webp" },
        { title: "Click Me", image: "@/assets/banner-shoes.webp" },
        { title: "Click Me 2", image: "@/assets/banner-laptops.jpg" },
      ],
      activeBtn: 1,
      // ... other data properties
    };
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
