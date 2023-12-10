<template>
  <div class="pt-5">
    <h3
      class="mx-5 mb-4 title text-start font-bold text-uppercase text-3xl relative pe-3"
    >
      <span class="pe-2">Products</span>
    </h3>
    <div class="flex flex-wrap px-5 pb-3" id="Prod-sec">
      <div
        v-for="prod in Products"
        :key="prod.id"
        class="lg:w-3/12 md:w-4/12 sm:w-6/12"
      >
        <div class="position-relative mb-3 rounded-0">
          <img :src="prod.image" alt="Image" class="w-full h-auto" />
          <div
            class="card-details h-100 w-100 absolute left-0 flex justify-center items-center"
          >
            <button
              @click="
                addToCart({
                  id: prod.id,
                  name: prod.name,
                  price: prod.price,
                  image: prod.image,
                  qte: qte,
                })
              "
              class="bg-none rounded-0 me-2"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-cart-fill"
                aria-hidden="true"
              >
                <path
                  d="M10 1a1 1 0 0 1 .993.883L11 2v1h2.732l1.315 6.576a2 2 0 0 0 1.826 1.4l.096-.013a2 2 0 0 0 1.67-1.87L16 5l-.073-.878a1.982 2.027 0 0 0-1.86-1.86L13 2H4a1 1 0 0 0 0 2h8a1 1 0 0 1 0 2H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10.077a1.5 1.5 0 0 1 1.414.947l1.553 3.887A1.5 1.5 0 0 0 16 16a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-1v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1.156a3 3 0 0 0 2.823 2h5.022a3 3 0 0 0 2.823-2H15a1 1 0 0 0 0-2h-2V7a1 1 0 0 1 1-1h3z"
                />
              </svg>
            </button>
            <a
              :to="{
                name: 'Product',
                params: {
                  id: prod.id,
                  name: prod.name,
                  image: prod.image,
                  price: prod.price,
                  desc: prod.description,
                },
              }"
              class="bg-none rounded-0"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-search"
                aria-hidden="true"
              >
                <path
                  d="M11 10a6 6 0 1 0-8 0 6 6 0 0 0 8 0zM15 15a1 1 0 0 1-1.707.707L10 10A8 8 0 1 1 2 10a7.952 8.952 0 0 1 5-1.464 1 1 0 0 1 .316.117l5.707 5.707A1 1 0 0 1 15 15z"
                />
              </svg>
            </a>
          </div>
          <div class="mt-4">
            <h5 class="font-bold">{{ prod.name }}</h5>
            <p class="my-2">{{ prod.price }} DT</p>
            <div class="flex justify-center items-center">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-star-fill me-1 text-warning"
                aria-hidden="true"
              ></svg>
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-star-fill me-1 text-warning"
                aria-hidden="true"
              ></svg>
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-star-fill me-1 text-warning"
                aria-hidden="true"
              ></svg>
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-star-fill me-1 text-warning"
                aria-hidden="true"
              ></svg>
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-star-half text-warning"
                aria-hidden="true"
              ></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="filteredProducts.length > 0"
      ref="resultsSection"
      class="flex flex-wrap"
    >
      <div
        v-for="item in filteredProducts"
        :key="item.id"
        class="lg:w-3/12 md:w-4/12 sm:w-6/12"
      >
        <div class="position-relative mb-3 rounded-0">
          <img :src="item.image" alt="Image" class="w-full h-auto" />
          <div
            class="card-details h-100 w-100 absolute left-0 flex justify-center items-center"
          >
            <button
              @click="
                addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                  qte: qte,
                })
              "
              class="bg-none rounded-0 me-2"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-cart-fill"
                aria-hidden="true"
              ></svg>
            </button>
            <a
              :to="{
                name: 'Product',
                params: {
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  price: item.price,
                  desc: item.description,
                },
              }"
              class="bg-none rounded-0"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-search"
                aria-hidden="true"
              ></svg>
            </a>
          </div>
          <div class="mt-4">
            <h5 class="font-bold">{{ item.name }}</h5>
            <p class="my-2">{{ item.price }} DT</p>
            <div class="flex justify-center items-center">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-star-fill me-1 text-warning"
                aria-hidden="true"
              ></svg>
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-star-fill me-1 text-warning"
                aria-hidden="true"
              ></svg>
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-star-fill me-1 text-warning"
                aria-hidden="true"
              ></svg>
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-star-fill me-1 text-warning"
                aria-hidden="true"
              ></svg>
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="bi bi-star-half text-warning"
                aria-hidden="true"
              ></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else ref="resultsSection"></div>
  </div>
</template>

<script>
export default {
  name: "ProductsView",
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
