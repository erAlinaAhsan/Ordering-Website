<template>
  <div class="flex justify-center mt-8">
    <div class="w-full md:w-8/12 lg:w-6/12">
      <div class="hover:shadow-xl transition duration-300 ease-in-out">
        <img
          v-if="product.image"
          :src="product.image"
          class="w-full h-64 object-cover"
        />

        <div class="p-4 bg-white">
          <h1 class="text-lg font-semibold">{{ product.name }}</h1>
          <p class="text-md text-gray-600">{{ product.price }}</p>
          <p class="text-md text-gray-600">{{ product.description }}</p>

          <div class="flex mt-4">
            <button
              class="mt-2 mr-4 bg-gray-200 text-gray-800 px-4 py-2 rounded"
            >
              ADD TO CART
            </button>
            <button class="mt-2 bg-gray-200 text-gray-800 px-4 py-2 rounded">
              ADD TO WISHLIST
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
/* Add styles as needed */
</style>
