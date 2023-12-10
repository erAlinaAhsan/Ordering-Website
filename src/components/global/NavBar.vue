<template>
  <div>
    <!-- Top Bar -->
    <div class="bg-white">
      <div class="flex justify-between items-center py-1 px-5 lg:px-0">
        <div class="lg:w-1/2 hidden lg:flex text-start">
          <div class="flex items-center space-x-3">
            <a href="#" class="text-decoration-none">About</a>
            <a href="#" class="text-decoration-none">Contact</a>
            <a href="#" class="text-decoration-none">Help</a>
            <a href="#" class="text-decoration-none">FAQs</a>
          </div>
        </div>
        <div class="text-center text-lg-end lg:w-1/2 flex items-center">
          <div class="relative">
            <div v-if="user === null" class="mr-2">
              <router-link to="/login" class="text-dark">Sign In</router-link>
            </div>
            <div v-if="user === null" class="mr-2">
              <router-link to="/register" class="text-dark"
                >Sign Up</router-link
              >
            </div>
            <div v-if="user" @click="logout" class="cursor-pointer mr-2">
              Sign Out
            </div>
            <div class="relative" x-data="{ open: false }">
              <button
                @click="open = !open"
                class="text-dark outline-none focus:outline-none"
              >
                My Account
              </button>
              <div
                x-show="open"
                @click="open = false"
                class="absolute right-0 mt-2 bg-white border shadow-lg rounded"
              >
                <router-link to="/auth/login" class="block px-4 py-2"
                  >Sign In</router-link
                >
                <router-link to="/auth/register" class="block px-4 py-2"
                  >Sign Up</router-link
                >
                <div
                  v-if="user"
                  @click="logout"
                  class="block px-4 py-2 cursor-pointer"
                >
                  Sign Out
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <button class="text-dark outline-none focus:outline-none relative">
              EN
            </button>
            <div
              class="absolute right-0 mt-2 bg-white border shadow-lg rounded"
            >
              <div class="block px-4 py-2">FR</div>
              <div class="block px-4 py-2">AR</div>
            </div>
          </div>
          <div class="lg:hidden inline-flex items-center">
            <button class="border-0 p-0 bg-transparent">
              <svg
                class="text-secondary"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <button class="border-0 p-0 bg-transparent">
              <svg
                class="text-secondary"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden lg:inline-flex flex-col text-secondary text-end me-2"
          >
            <p>Customer Service</p>
            <h5 class="text-black">+012 356 6894</h5>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="py-2 px-5 lg:px-0">
      <div class="flex">
        <div class="lg:w-3/12 sm:w-6/12 text-start ms-lg-2">
          <router-link
            to="/"
            class="text-decoration-none text-uppercase font-bold py-2"
          >
            <span class="text-warning">E-</span>shop
          </router-link>
        </div>
        <div class="lg:w-9/12 lg:ms-lg-5 mt-2 lg:mt-0">
          <div class="relative">
            <input
              v-model="searchProduct"
              placeholder="Search for Products"
              class="rounded-0 shadow-none p-2 pr-8"
            />
            <button
              @click="filterItems"
              class="absolute right-0 top-0 bottom-0 px-3 py-2"
            >
              <svg
                class="text-warning font-bold"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 22l-4-4-1.5-1.5-2 2L12 6 6 12l2 2-1.5 1.5-4 4"
                ></path>
              </svg>
            </button>
          </div>
          <div class="hidden lg:inline-flex ml-5">
            <div class="relative">
              <button
                class="bg-transparent rounded-0 border"
                @click="toggleCategories"
              >
                All Categories
              </button>
              <div
                v-show="showCategories"
                @click="showCategories = false"
                class="absolute right-0 mt-2 bg-white border shadow-lg rounded"
              >
                <div class="block px-4 py-2">Action</div>
                <div class="block px-4 py-2">Another action</div>
                <div class="block px-4 py-2">Something else here...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      searchProduct: "",
      showCategories: false,
    };
  },
  methods: {
    logout() {
      // Add your logout logic here
    },
    filterItems() {
      // Add your filter logic here
    },
    toggleCategories() {
      this.showCategories = !this.showCategories;
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
