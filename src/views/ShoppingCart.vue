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
            <tr>
              <td>
                <div class="flex items-center">
                  <img
                    :src="cartItems.image"
                    alt="Product Image"
                    class="w-16 h-16 object-cover rounded mr-2"
                  />
                  <div>
                    <p class="font-bold">{{ cartItems.name }}</p>
                  </div>
                </div>
              </td>
              <td>{{ cartItems.price }}</td>
              <!-- <td>
                <input
                  type="number"
                  class="w-16 p-2 border"
                  v-model="item.quantity_in_stock"
                />
              </td> -->
              <td>
                <a @click="removeCartItem()">X</a>
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
            v-if="!orderPlaced"
            class="bg-blue-500 text-white px-4 py-2 rounded"
            @click="placeOrder"
          >
            Place Order
          </button>
          <p v-if="orderPlaced" class="text-green-600 font-bold">
            Order placed successfully!
          </p>
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
      orderPlaced: false,
      cartId: null,
    };
  },
  methods: {
    async fetchCartDetails(cartId) {
      try {
        const response = await axios.get(
          `https://ecommerce.hyperzod.dev/api/cart/${cartId}`
        );
        var cartData = response.data.data.cart;
        console.log(cartData);
        if (cartData.product) {
          this.cartItems = cartData.product; // Convert the product to an array
        } else {
          this.cartItems = null; // If no product in the cart, set an empty array
        }
        this.calculateOrderSummary();
      } catch (error) {
        console.error("API Error:", error);
      }
    },
    calculateOrderSummary() {
      if (this.cartItems) {
        this.orderSummary.subtotal = +this.cartItems.price;
        this.orderSummary.shippingCharges = 100;
        this.orderSummary.tax = this.cartItems.price * 0.05;
        this.orderSummary.total =
          this.orderSummary.subtotal +
          this.orderSummary.shippingCharges +
          this.orderSummary.tax;
        console.log(this.orderSummary.total);
        this.orderSummary.total = parseFloat(this.orderSummary.total).toFixed(
          2
        );
        return;
      }

      const cartItem = this.cartItems;
      console.log("First Cart Item:", cartItem);

      if (!cartItem.cart) {
        console.log("Cart not available in the first item");
        this.orderSummary = {
          subtotal: "0.00",
          shippingCharges: 0,
          tax: "0.00",
          total: "0.00",
        };
        return;
      }
    },

    removeCartItem(index) {
      const itemId = this.cartItems.id;
      console.log(itemId);
      axios
        .delete(`https://ecommerce.hyperzod.dev/api/cart/${itemId}`)
        .then(() => {
          this.cartItems.splice(index, 1);
          this.calculateOrderSummary();
          // this.$router.push(`/cart/${this.cartId}`);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            console.error("Item not found:", error.response.data.message);
            // Handle 404 error (e.g., display a message to the user)
          } else {
            console.error("API Error:", error);
          }
        });
    },

    async placeOrder() {
      try {
        const response = await axios.post(
          "https://ecommerce.hyperzod.dev/api/user/place-order",
          {
            cartItems: this.cartItems,
          }
        );

        const orderStatus = response.data.status;
        console.log("Order Status:", orderStatus);

        if (orderStatus === "success") {
          // Order placed successfully, update the state
          this.orderPlaced = true;

          // Redirect to view order page after a short delay
          setTimeout(() => {
            this.$router.push(`/view-order/${order_id}`);
          }, 2000);
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  },
  mounted() {
    const cartId = this.$route.params.cartId; // Extract cart ID from the route
    console.log(cartId);
    this.cartId = cartId;
    this.fetchCartDetails(cartId);
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
