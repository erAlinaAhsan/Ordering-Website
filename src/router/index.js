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
import AllOrders from "../views/AllOrders.vue";

// login routes...
import UserRegister from '../views/Auth/UserRegister.vue';
import UserLogin from '../views/Auth/UserLogin.vue';

const routes = [
  {
    path: '/',
    beforeEnter: (to, from, next) => {

      next('/home')
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: false },
  },
  {
    path: '/cart/:cartId',
    name: 'cart',
    component: ShoppingCart,
    meta: { requiresAuth: false },

  },

  {
    path: '/products',
    name: 'products',
    component: AllProducts,
    meta: { requiresAuth: false },
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: ProductDetails,
    meta: { requiresAuth: false },
    props: route => ({ product: JSON.parse(route.query.product) }),
  },
  {
    path: '/productcard',
    name: 'productcard',
    component: ProductCard,
    meta: { requiresAuth: false },
  },
  {
    path: '/category-products',
    name: 'category-products',
    component: CategoryProducts,
    meta: { requiresAuth: false },
  },

  {
    path: '/categories',
    name: 'categories',
    component: AllCategories,
    meta: { requiresAuth: false },
  },
  {
    path: '/shopbycategory',
    name: 'shopbycategory',
    component: ShopByCategory,
    meta: { requiresAuth: false },
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
    meta: { requiresAuth: false },

  },
  {
    path: "/view-order/:orderId",
    name: "view-order",
    component: ViewOrder,
    meta: { requiresAuth: true },

  },
  {
    path: "/all-orders",
    name: "all-orders",
    component: AllOrders,
    meta: { requiresAuth: true },

  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.path === '/') {
    next('/home');
    return;
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("authToken") === null) {
      next({ name: 'login' })
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router;
