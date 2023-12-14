<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="md:w-5/12 sm:w-5/12 xs:w-full">
        <!-- Replace this with your own image or slideshow implementation -->
        <img
          src="../assets/banner-phones.webp"
          alt="Product Image"
          class="w-full"
        />
      </div>
      <div class="md:w-7/12 sm:w-7/12 xs:w-full">
        <div class="pl-6">
          <p class="text-5xl mb-0">Modern Black T-Shirt</p>
          <div class="p-0">
            <p class="text-3xl font-light pt-3">
              $65.00 <del class="text-lg font-thin">$80.00</del>
            </p>
            <div class="flex items-center">
              <v-rating
                v-model="rating"
                class="bg-warning-lighten-3"
                color="warning"
                dense
              ></v-rating>
              <span class="text-sm font-thin">25 REVIEWS</span>
            </div>
          </div>
          <p class="text-lg font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales
            ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi
            tristique senectus et netus et malesuada.
          </p>
          <p class="text-2xl">SIZE</p>
          <v-radio-group v-model="row" row>
            <v-radio label="XS" value="XS"></v-radio>
            <v-radio label="S" value="s"></v-radio>
            <v-radio label="M" value="m"></v-radio>
            <v-radio label="L" value="l"></v-radio>
            <v-radio label="XL" value="xl"></v-radio>
          </v-radio-group>
          <p class="text-2xl">ITEMS</p>
          <v-text-field
            outlined
            style="width: 100px"
            :value="1"
            dense
          ></v-text-field>
          <div class="flex mt-4">
            <v-btn class="bg-primary text-white" outlined tile dense
              >ADD TO CART</v-btn
            >
            <v-btn class="ml-4" outlined tile>ADD TO WISHLIST</v-btn>
          </div>
        </div>
      </div>
    </div>

    <div class="flex">
      <div class="w-full">
        <div>
          <p class="text-2xl">Description</p>
          <p class="pt-4 text-lg font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ultricies mi eget mauris pharetra et. Vel pretium lectus quam id leo
            in vitae turpis massa. Orci dapibus ultrices in iaculis nunc. At
            auctor urna nunc id cursus metus. Integer feugiat scelerisque varius
            morbi enim nunc. Aliquam sem et tortor consequat id porta nibh
            venenatis cras. Pellentesque pulvinar pellentesque habitant morbi
            tristique senectus et netus. Malesuada nunc vel risus commodo
            viverra maecenas. Neque volutpat ac tincidunt vitae semper quis.
          </p>
        </div>
        <div>
          <p class="text-2xl">Materials</p>
          <p class="pt-4 text-lg font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ultricies mi eget mauris pharetra et. Vel pretium lectus quam id leo
            in vitae turpis massa. Orci dapibus ultrices in iaculis nunc. At
            auctor urna nunc id cursus metus. Integer feugiat scelerisque varius
            morbi enim nunc. Aliquam sem et tortor consequat id porta nibh
            venenatis cras. Pellentesque pulvinar pellentesque habitant morbi
            tristique senectus et netus. Malesuada nunc vel risus commodo
            viverra maecenas. Neque volutpat ac tincidunt vitae semper quis.
          </p>
        </div>
        <div>
          <p class="text-2xl">REVIEWS</p>
          <div>
            <!-- Replace this with your own reviews implementation -->
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-8">
      <div class="w-full">
        <div>
          <p class="text-xl font-light">YOU MIGHT ALSO LIKE</p>
          <hr class="border-t-2 border-gray-300 my-4" />
          <div class="flex justify-center mt-4">
            <!-- Replace this with your own product recommendations implementation -->
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-8">
      <div class="w-full">
        <div class="flex">
          <div class="md:w-4/12 sm:w-4/12">
            <div class="hover:shadow-xl transition duration-300 ease-in-out">
              <img
                :src="require('@/assets/banner-bags.jpg')"
                alt="Product Image"
                class="w-1/2 h-64 object-cover"
              />
              <div class="p-4 bg-white">
                <p class="text-lg font-semibold">Bags & Purses</p>
                <p class="text-sm text-gray-600">Upto 60% + Extra 10%</p>
                <p class="text-sm text-gray-600">Baggit, Zara, Fossil</p>
                <button class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                  Explore
                </button>
              </div>
            </div>
          </div>
          <!-- Add more product cards similarly -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 0,
      row: null,
      // Add other data properties as needed
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
