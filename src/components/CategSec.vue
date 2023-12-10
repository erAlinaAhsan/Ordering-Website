<template>
  <div class="pt-5 mx-5 md:mx-10">
    <h3 class="mb-4 text-start font-bold uppercase text-2xl relative pe-3">
      <span class="pe-2">Categories</span>
    </h3>
    <div class="flex flex-wrap -mx-3">
      <div
        v-for="cat in Category"
        :key="cat.id"
        class="w-full md:w-1/2 lg:w-1/4 px-3 mb-3"
      >
        <div class="overflow-hidden rounded mb-3">
          <!-- You can include an image here if needed -->
          <!-- <img src="https://picsum.photos/400/400/?image=20" alt="Category Image" class="w-full h-auto" /> -->
          <div class="bg-white p-4">
            <h6 class="font-bold text-start text-lg">{{ cat.name }}</h6>
            <small class="block text-sm text-gray-500">100 products</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategSec",
  data() {
    return {
      Category: [
        { id: 1, name: "Category 1" },
        { id: 2, name: "Category 2" },
        // ... more categories
      ],
    };
  },
};
</script>

<style scoped>
/* You can keep or modify these styles based on your needs */
.mb-3 {
  margin-bottom: 0.75rem;
}

.overflow-hidden {
  overflow: hidden;
}

.rounded {
  border-radius: 0.25rem;
}

.bg-white {
  background-color: #fff;
}

.p-4 {
  padding: 1rem;
}

.text-start {
  text-align: start;
}

.font-bold {
  font-weight: bold;
}

.text-uppercase {
  text-transform: uppercase;
}

.text-2xl {
  font-size: 1.5rem;
}

.relative {
  position: relative;
}

.pe-2 {
  padding-right: 0.5rem;
}

/* Additional styles based on your existing styles */
.card-title {
  font-weight: bold;
  margin: 0;
  text-transform: capitalize;
}
</style>
