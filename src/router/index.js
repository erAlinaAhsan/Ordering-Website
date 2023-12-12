import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import UserRegister from "../views/Auth/UserRegister.vue";
import UserLogin from "../views/Auth/UserLogin.vue";

const routes = [
  {
    path: '/home',
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
    path: "/register",
    name: "register",
    component: UserRegister
  },
  {
    path: "/login",
    name: "login",
    component: UserLogin
  },

  // {
  //   path: "/helloworld",
  //   name: "HelloWorld",
  //   component: () => import("../components/HelloWorld.vue"),
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
