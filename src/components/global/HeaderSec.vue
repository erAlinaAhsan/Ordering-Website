<template>
  <div class="hidden lg:block">
    <div class="container-fluid">
      <div class="flex px-5">
        <div class="w-1/4">
          <button
            class="shadow-none bg-warning flex items-center justify-between rounded-0 px-4"
          >
            <svg
              class="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M3 3a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zM10 3a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zM17 3a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1z"
              />
            </svg>
            All Categories
          </button>
          <div class="relative" x-data="{ open: false }">
            <button
              @click="open = !open"
              class="shadow-none bg-warning flex items-center justify-between rounded-0 px-4 w-100 h-100"
            >
              <svg
                class="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M3 3a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zM10 3a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zM17 3a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1z"
                />
              </svg>
              All Categories
            </button>
            <div
              x-show="open"
              @click="open = false"
              class="absolute w-full rounded-md bg-white shadow-lg mt-2"
            >
              <a
                href="#"
                v-for="cat in Category"
                :key="cat.id"
                class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >{{ cat.name }}</a
              >
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <div class="flex pt-2 w-50">
            <a href="/" class="bg-transparent text-white border-0"> Home </a>
            <a href="#Prod-sec" class="bg-transparent text-white border-0">
              Products
            </a>
            <a href="" class="bg-transparent text-white border-0"> Men </a>
            <a href="" class="bg-transparent text-white border-0"> Women </a>
          </div>
        </div>
        <div class="w-1/4 flex justify-end items-center relative">
          <button size="lg" class="border-0" @click="showCart = !showCart">
            <svg
              class="fill-current text-warning"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              <path
                fill-rule="evenodd"
                d="M19 5a1 1 0 0 1 0 2h-2.52l-3.652 7.304a1 1 0 1 1-1.496-1.304l4-8a1 1 0 0 1 1.788-.072L17.68 3H4a1 1 0 1 1 0-2h14a1 1 0 0 1 .8 1.6 1 1 0 0 1-.133.4l-5 10a1 1 0 1 1-1.732-1.2l5-10A1 1 0 0 1 15 1h4a1 1 0 1 1 0 2h-4.52l-3.652 7.304a1 1 0 1 1-1.496-1.304l4-8a1 1 0 0 1 1.788-.072L16.68 3H19a1 1 0 0 1 0 2h-2.52l-3.652 7.304a1 1 0 1 1-1.496-1.304l4-8A1 1 0 0 1 19 5z"
              />
            </svg>
            <span
              class="rounded-circle ms-1 border text-light"
              style="padding: 2px 5px 2px 0"
            >
              {{ cartItems.length }}
            </span>
          </button>
          <div
            :class="{ 'no-body': true, 'overflow-hidden': true }"
            v-if="showCart"
          >
            <!-- ... (rest of the cart content) ... -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSec",
  // ... (rest of your component logic)
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
