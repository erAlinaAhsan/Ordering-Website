<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <FeaturesSec />
    <CategSec />
    <ProdSec />
    <OfferSec />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import FeaturesSec from "@/components/FeaturesSec.vue";
import CategSec from "@/components/CategSec.vue";
import ProdSec from "@/components/ProductsView.vue";
import OfferSec from "@/components/OfferSec.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    FeaturesSec,
    CategSec,
    ProdSec,
    OfferSec,
  },
};
</script>
