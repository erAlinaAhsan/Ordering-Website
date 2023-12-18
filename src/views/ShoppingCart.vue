<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-light text-center py-4">SHOPPING CART</h1>

    <!-- Cart Items -->
    <div class="flex flex-wrap -mx-2">
      <div class="w-full md:w-9/12 p-2">
        <table class="w-full">
          <thead>
            <tr>
              <th class="text-center">ITEM</th>
              <th class="text-center">PRICE</th>
              <!-- <th class="text-center">QUANTITY</th> -->
              <th class="text-center">ACTION</th>
              <th class="text-center">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems.products" :key="index">
              <td>
                <div class="flex items-center">
                  <img
                    :src="item.image"
                    alt="Product Image"
                    class="w-16 h-16 object-cover rounded mr-2"
                  />
                  <div>
                    <p class="font-bold">{{ item.name }}</p>
                    <p class="text-sm">{{ item.description }}</p>
                  </div>
                </div>
              </td>
              <td>{{ item.price }}</td>
              <!-- <td>
                <input
                  type="number"
                  class="w-16 p-2 border"
                  v-model="item.quantity_in_stock"
                />
              </td> -->
              <td>
                <a @click="removeCartItem(index)">X</a>
              </td>
            </tr>
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
              <td class="text-right">{{ orderSummary.subtotal }}</td>
            </tr>
            <tr>
              <td>Shipping Charges</td>
              <td class="text-right">{{ orderSummary.shippingCharges }}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td class="text-right">{{ orderSummary.tax }}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td class="text-right font-bold">{{ orderSummary.total }}</td>
            </tr>
          </tbody>
        </table>

        <div class="text-center mt-5">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded"
            @click="placeOrder"
          >
            Place Order
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

    <!-- Repeat similar structure for other information -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cartItems: [],
      orderSummary: {
        subtotal: 0,
        shippingCharges: 0,
        tax: 0,
        total: 0,
      },
    };
  },
  methods: {
    async fetchCartDetails() {
      try {
        const response = await axios.get(
          "https://ecommerce.hyperzod.dev/api/view-cart"
        );
        this.cartItems = response.data.data.cart.products;
        this.calculateOrderSummary();
      } catch (error) {
        console.error("API Error:", error);
      }
    },

    removeCartItem(index) {
      const itemId = this.cartItems[index].id;
      axios
        .delete(`https://ecommerce.hyperzod.dev/api/view-cart/${itemId}`)
        .then(() => {
          this.cartItems.splice(index, 1);
          this.calculateOrderSummary();
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    },
    calculateOrderSummary() {
      const subtotal = this.cartItems.reduce(
        (total, item) => total + parseFloat(item.price) * item.pivot.quantity,
        0
      );
      const shippingCharges = 10; // You may fetch this dynamically from the server
      const tax = subtotal * 0.05; // You may fetch tax rate dynamically from the server
      const total = subtotal + shippingCharges + tax;

      this.orderSummary = {
        subtotal: subtotal.toFixed(2),
        shippingCharges,
        tax: tax.toFixed(2),
        total: total.toFixed(2),
      };
    },
    async placeOrder() {
      try {
        // You might need to adjust the data sent in the request body based on your API requirements
        const response = await axios.post(
          "https://ecommerce.hyperzod.dev/api/user/order/place",
          {
            // Add any data you need to send with the order
            // For example, you might want to include the cart items, user information, etc.
            // Modify this based on your API's expectations
            cartItems: this.cartItems,
            // Add other relevant data as needed
          }
        );

        // Assuming the API returns a status in the response
        const orderStatus = response.data.status;
        console.log("Order Status:", orderStatus);

        // You might want to perform additional actions based on the order status
        // For example, redirect to a confirmation page, show a message, etc.
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  },
  mounted() {
    this.fetchCartDetails();
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
