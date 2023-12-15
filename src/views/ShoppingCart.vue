<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-light text-center py-4">SHOPPING CART</h1>

    <!-- Cart Items -->
    <div class="flex flex-wrap -mx-2">
      <!-- Cart Item 1 -->
      <div class="w-full md:w-9/12 p-2">
        <table class="w-full">
          <thead>
            <tr>
              <th class="text-center">ITEM</th>
              <th class="text-center">PRICE</th>
              <th class="text-center">QUANTITY</th>
              <th class="text-center">TOTAL</th>
              <th class="text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="flex items-center">
                  <img
                    src="../assets/banner-phones.webp"
                    alt="Item 1"
                    class="w-16 h-16 object-cover rounded mr-2"
                  />
                  <div>
                    <p class="font-bold">Item 1</p>
                    <p class="text-sm">Lorem Ipsum</p>
                  </div>
                </div>
              </td>
              <td>$40.00</td>
              <td>
                <input type="number" class="w-16 p-2 border" value="2" />
              </td>
              <td>$80.00</td>
              <td><a>X</a></td>
            </tr>
            <!-- Repeat similar structure for other items -->
          </tbody>
        </table>
      </div>

      <!-- Order Summary -->
      <div class="w-full md:w-3/12 p-2 bg-gray-200">
        <p class="text-xl font-bold">Order Summary</p>
        <p class="text-sm">
          Shipping and additional costs are calculated based on values you have
          entered.
        </p>

        <table class="w-full">
          <tbody>
            <tr>
              <td>Order Subtotal</td>
              <td class="text-right">$160.00</td>
            </tr>
            <tr>
              <td>Shipping Charges</td>
              <td class="text-right">$10.00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td class="text-right">$5.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td class="text-right font-bold">$175.00</td>
            </tr>
          </tbody>
        </table>

        <div class="text-center mt-5">
          <button class="bg-blue-500 text-white px-4 py-2 rounded">
            PROCEED TO PAY
          </button>
        </div>
      </div>
    </div>

    <!-- Additional Information -->
    <div class="card bg-blue-400 p-4 mt-4">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <i class="mdi mdi-truck text-4xl"></i>
        </div>
        <div class="ml-4">
          <h3 class="font-light">FREE SHIPPING & RETURN</h3>
          <p class="font-thin">Free Shipping over $300</p>
        </div>
      </div>
    </div>

    <div class="card bg-green-400 p-4 mt-4">
      <!-- Repeat similar structure for other information -->
    </div>

    <div class="card bg-yellow-400 p-4 mt-4">
      <!-- Repeat similar structure for other information -->
    </div>
  </div>
</template>

<script>
// Add your script here
</script>

<style scoped>
/* Add any custom styles here */
</style>
