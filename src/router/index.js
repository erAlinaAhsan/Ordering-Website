import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserRegister from "../views/Auth/UserRegister.vue";
import UserLogin from "../views/Auth/UserLogin.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: "/auth/register",
    name: "register",
    component: UserRegister
  },
  {
    path: "/auth/login",
    name: "login",
    component: UserLogin
  },
  {
    path: "/Product/:id/:name/:image/:desc/:price",
    name: "Product",
    component: () => import("../views/ProductDetail.vue"),
  },
  {
    path: "/navbar",
    name: "NavBar",
    component: () => import("../components/global/NavBar.vue"),
  },
  {
    path: "/features",
    name: "FeaturesSec",
    component: () => import("../components/FeaturesSec.vue"),
  },
  {
    path: "/topbar",
    name: "TopBar",
    component: () => import("../components/global/TopBar.vue"),
  },
  {
    path: "/sidebar",
    name: "SideBar",
    component: () => import("../components/global/SideBar.vue"),
  },

  {
    path: "/cart/:cartItems",
    name: "ShoppingCart",
    component: () => import("../views/ShoppingCart.vue"),
  },
  {
    path: "/footer",
    name: "FooterSec",
    component: () => import("../components/global/FooterSec.vue"),
  },
  {
    path: "/category",
    name: "categSec",
    component: () => import("../components/CategSec.vue"),
  },
  {
    path: "/offers",
    name: "OfferSec",
    component: () => import("../components/OfferSec.vue"),
  },
  {
    path: "/header",
    name: "HeaderSec",
    component: () => import("../components/global/HeaderSec.vue"),
  },
  {
    path: "/helloworld",
    name: "HelloWorld",
    component: () => import("../components/HelloWorld.vue"),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
