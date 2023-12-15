<template>
  <div>
    <div class="flex items-center bg-gray-800 p-4">
      <!-- <img
            alt="kErana Logo"
            class="mr-2"
            src="./assets/Logo/kErana Logo.svg"
            width="40"
         /> -->

      <h1 class="text-white font-semibold text-xl">Qart</h1>

      <div class="my-auto mt-1 ml-auto">
        <input
          type="text"
          class="p-2 rounded border-none"
          placeholder="Search"
        />
      </div>

      <div class="ml-auto">
        <button class="mt-2 mr-4 bg-gray-200 text-gray-800 px-4 py-2 rounded">
          Cart
        </button>
        <button class="mt-2 bg-gray-200 text-gray-800 px-4 py-2 rounded">
          Login
        </button>
      </div>
    </div>

    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>
<script>
</script>
