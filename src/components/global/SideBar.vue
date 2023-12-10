<template>
  <aside
    class="absolute text-white top-0 left-0 w-1/6 z-50 bg-blue-500 pt-28 min-h-screen"
  >
    <ul class="text-start">
      <li>
        <router-link
          to="/SideBar/category"
          class="block bg-transparent text-white border-0 py-2 px-3"
          :class="{ 'bg-blue-700': $route.path === '/SideBar/category' }"
          >Category</router-link
        >
      </li>
      <li>
        <router-link
          to="/SideBar/Products"
          class="block bg-transparent text-white border-0 py-2 px-3"
          :class="{ 'bg-blue-700': $route.path === '/SideBar/Products' }"
          >Products</router-link
        >
      </li>
      <li>
        <router-link
          to=""
          class="block bg-transparent text-white border-0 py-2 px-3"
          :class="{ 'bg-blue-700': $route.path === '' }"
          >Order</router-link
        >
      </li>
      <li>
        <router-link
          to="/SideBar/profile"
          class="block bg-transparent text-white border-0 py-2 px-3"
          :class="{ 'bg-blue-700': $route.path === '/SideBar/profile' }"
          >Profile</router-link
        >
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
