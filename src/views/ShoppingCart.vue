<template>
  <div class="pt-4">
    <div class="px-5">
      <nav class="bg-white py-2 ps-3">
        <ol class="breadcrumb">
          <li
            class="breadcrumb-item"
            v-for="(crumb, index) in crumbs"
            :key="index"
          >
            <router-link
              :to="crumb.to"
              :href="crumb.href"
              v-if="!crumb.active"
              >{{ crumb.text }}</router-link
            >
            <span v-else>{{ crumb.text }}</span>
          </li>
        </ol>
      </nav>
    </div>
    <div class="px-5">
      <div v-if="MyCart.length > 0">
        <table class="table table-hover table-sm table-responsive">
          <thead class="text-light" style="background: #1f2e4d">
            <tr>
              <th class="py-3" colspan="3">Name</th>
              <th class="py-3" colspan="3">Price</th>
              <th class="py-3" colspan="3">Quantity</th>
              <th class="py-3" colspan="3">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="prod in MyCart"
              :key="prod.id"
              class="bg-white"
              style="vertical-align: middle"
            >
              <td colspan="3">
                <img :src="prod.image" alt="" width="80px" height="60px" />
                {{ prod.name }}
              </td>
              <td colspan="3">{{ prod.price }} DT</td>
              <td colspan="3">
                <div class="form-group">
                  <input
                    v-model="prod.qte"
                    type="number"
                    min="1"
                    class="form-control w-25 m-auto text-center shadow-none"
                  />
                </div>
              </td>
              <td colspan="3">{{ prod.price * prod.qte }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>Your shopping basket is empty.</p>
      </div>
    </div>
    <div class="md:px-5 md:col-md-4">
      <h5 class="text-start text-uppercase mb-3">Cart Summary</h5>
      <div class="bg-white p-30 mb-5">
        <div class="p-2">
          <div class="flex justify-between mt-2">
            <h5>Total:</h5>
            <h5>{{ total }} DT</h5>
          </div>
          <router-link
            to="/login"
            class="btn btn-block btn-warning font-weight-bold my-3 py-2"
          >
            Proceed To Checkout
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      MyCart: JSON.parse(this.$route.params.cartItems),
      totalProd: 0,
      crumbs: [
        { text: "Home", to: { name: "home" } },
        { text: "Products", href: "/#Prod-sec" },
        { text: "Cart", active: true },
      ],
    };
  },
  computed: {
    total() {
      let total = 0;
      this.MyCart.forEach((product) => {
        total += product.price * product.qte;
      });
      return total.toFixed(3);
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
