<template>
  <div>
    <div class="container">
      <div class="list-container" v-if="showListContainer">
        <div
          class="flex-div"
          v-for=" in displayedCoffees"
          :key="coffee.id"
          display="flex"
          @click="toggleDetails(coffee)"
        >
          <img :src="coffee.image" class="imgs" />
          <p>
            <b>{{ coffee.title }}</b>
            <br />
          </p>
          <p class="description" v-show="coffee.showDetails">
            {{ coffee.description }}
          </p>
          <p v-show="coffee.showDetails">{{ coffee.ingredients }}</p>
          <p v-show="coffee.showDetails">{{ coffee.id }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  props: {
    coffees: Array,

    showListContainer: Boolean,
    filteredCoffees: Array,
  },
  methods: {
    toggleDetails(coffee) {
      coffee.showDetails = !coffee.showDetails;
    },
  },
  computed: {
    displayedCoffees() {
      return this.showListContainer ? this.filteredCoffees : this.coffees;
    },
  },
};
</script>



<style scoped>
.container {
  padding-bottom: 20px;
  overflow-x: hidden;
  margin-top: 100px;
}

.list-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 30px;
  margin-top: 50px;
}
.listdesp-container p {
  display: none;
}
.large-container {
  padding-left: 12%;
  overflow-x: hidden;
  /* margin-right: 70px; */
}
/* .hidden-container {
  display: none;
} */
.imgs {
  width: 250px;
  height: 300px;
  border-radius: 3%;
  margin-right: 10px;
}
.flex-div {
  align-items: flex-start;
  margin-top: 70px;
}
.flex-div p {
  color: #9e9e9e;
  font-size: 14px;
}
@media (max-width: 900px) {
  .container,
  .large-container {
    padding-left: 5%;
    padding-right: 5%;
    overflow-x: hidden;
  }
}
</style>
