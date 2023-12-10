<template>
  <div class="pt-5 overflow-hidden">
    <div class="flex flex-wrap justify-center px-5 md:px-10 pb-3">
      <div class="w-full sm:w-12/12 md:w-6/12 lg:w-3/12 mb-4">
        <div class="flex justify-center items-center bg-white p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="text-warning w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <h5 class="font-bold text-lg ml-2">Quality Product</h5>
        </div>
      </div>
      <!-- Repeat the structure for other icons -->
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesSec",
};
</script>

<style scoped>
.icons {
  animation: move 4s linear 0s infinite alternate;
}
@keyframes move {
  from {
    transform: translateX(-5%);
  }
  to {
    transform: translateX(5%);
  }
}
</style>
