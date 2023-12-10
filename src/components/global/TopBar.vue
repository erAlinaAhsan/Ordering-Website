<template>
  <div class="bg-white py-1 px-5 md:px-10">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <a href="#" class="text-blue-500 text-base font-bold mr-3">About</a>
        <a href="#" class="text-blue-500 text-base font-bold mr-3">Contact</a>
        <a href="#" class="text-blue-500 text-base font-bold mr-3">Help</a>
        <a href="#" class="text-blue-500 text-base font-bold">FAQs</a>
      </div>
      <div class="flex items-center">
        <div v-if="user">
          <button
            @click="logout"
            class="w-full mx-1 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </div>
        <div v-else>
          <a href="/login" class="text-blue-500 text-base font-bold mr-3"
            >Sign In</a
          >
          <a href="/register" class="text-blue-500 text-base font-bold"
            >Sign Up</a
          >
        </div>
        <div class="relative">
          <button
            class="bg-light text-secondary px-4 py-2 rounded-full focus:outline-none"
          >
            EN
          </button>
          <div
            class="hidden absolute right-0 mt-2 bg-white border rounded-md shadow-md"
          >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
              >FR</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
              >AR</a
            >
          </div>
        </div>
        <div class="md:hidden inline">
          <button class="border-0" @click="toggleCart">
            <i class="icon-cart text-secondary"></i>
          </button>
          <span class="text-secondary font-bold"> 0,000 DT</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  methods: {
    logout() {
      // Implement your logout logic here
    },
    toggleCart() {
      // Implement your cart toggle logic here
    },
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
