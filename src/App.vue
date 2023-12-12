<template>
  <div id="app">
    <HomeView />
    <router-view />
  </div>
</template>

<script>
import HomeView from "./components/HomeView.vue";

export default {
  name: "App",
  components: {
    HomeView,
  },
};
</script>

