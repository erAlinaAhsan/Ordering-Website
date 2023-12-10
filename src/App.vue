<!--<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/auth/login">Login</router-link>|
    <router-link to="/auth/register">Register</router-link>
  </nav>
  <router-view />
</template>-->



<template>
  <div id="app">
    <NavBar />
    <Header />
    <router-view />
    <end />
  </div>
</template>
<script>
/* eslint-disable */
import NavBar from "@/components/global/NavBar.vue";
import end from "@/components/global/FooterSec.vue";
// import TopBar from "@/components/global/TopBar.vue";
import Header from "@/components/global/HeaderSec.vue";

export default {
  name: "App",
  components: {
    NavBar,
    end,
    // TopBar,
    Header,
  },
};
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* main {
    background-color: blueviolet;
  } */
</style>
