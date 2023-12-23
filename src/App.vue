<template>
  <div>
    <NavBar></NavBar>
  </div>
  <FootBar> </FootBar>
</template>

<script>
import FootBar from "./components/FootBar.vue";
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
    FootBar,
  },
};
</script>

