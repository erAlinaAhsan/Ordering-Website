// components routes...
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ShoppingCart from '../views/ShoppingCart.vue';
import AllProducts from '../views/AllProducts.vue';
import ProductDetails from '../views/ProductDetails.vue'
import CategoryProducts from '../views/CategoryProducts.vue';
import AllCategories from '../views/AllCategories.vue';
import ShopByCategory from '../components/ShopByCategory.vue';
import ProductCard from "../components/ProductCard.vue";
import ViewOrder from "../views/ViewOrder.vue";

// login routes...
import UserRegister from '../views/Auth/UserRegister.vue';
import UserLogin from '../views/Auth/UserLogin.vue';

const routes = [
  // {
  //   path: '/',
  //   beforeEnter: (to, from, next) => {

  //     next('/home')
  //   }
  // },
  {
    path: '/home',
    name: 'home',
    component: HomeView,

  },
  {
    path: '/cart/:cartId',
    name: 'cart',
    component: ShoppingCart,

  },

  {
    path: '/products',
    name: 'products',
    component: AllProducts,
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: route => ({ product: JSON.parse(route.query.product) }),
  },
  {
    path: '/productcard',
    name: 'productcard',
    component: ProductCard,
  },
  {
    path: '/category-products',
    name: 'category-products',
    component: CategoryProducts,
  },
  // {
  //   path: '/products/:id',
  //   name: 'product-detail',
  //   component: () => import('@/views/ProductDetail.vue'), // Create this view
  //   props: true,
  // },
  {
    path: '/categories',
    name: 'categories',
    component: AllCategories,
  },
  {
    path: '/shopbycategory',
    name: 'shopbycategory',
    component: ShopByCategory,
  },
  //login routes
  {
    path: '/register',
    name: 'register',
    component: UserRegister,
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin,

  },
  {
    path: "/view-order/:orderId", // Dynamic parameter for the order ID
    name: "view-order",
    component: ViewOrder,

  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title;
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.getItem("authToken") === null) {
//       next({ name: 'login' })
//     } else {
//       next();
//     }
//   } else {
//     next() // does not require auth, make sure to always call next()!
//   }
// });

export default router;
