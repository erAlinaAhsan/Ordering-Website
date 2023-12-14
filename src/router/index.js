// components routes...
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import SingleProduct from '../components/SingleProduct.vue'
import AllProducts from '../components/AllProducts.vue'
import AllCategories from '../components/AllCategories.vue'

// login routes...
import UserRegister from "../views/Auth/UserRegister.vue";
import UserLogin from "../views/Auth/UserLogin.vue";

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart
  },
  {
    path: '/product',
    name: 'product',
    component: SingleProduct
  },

  {
    path: '/products',
    name: 'products',
    component: AllProducts
  },

  {
    path: '/categories',
    name: 'categories',
    component: AllCategories
  },

  //login routes

  {
    path: "/register",
    name: "register",
    component: UserRegister
  },
  {
    path: "/login",
    name: "login",
    component: UserLogin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
