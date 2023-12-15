// components routes...
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ShoppingCart from '../views/ShoppingCart.vue';
import SingleProduct from '../components/SingleProduct.vue';
import AllProducts from '../views/AllProducts.vue';
import ProductDetails from '../views/ProductDetails.vue'

import AllCategories from '../views/AllCategories.vue';
import ShopByCategory from '../components/ShopByCategory.vue';
import ProductCard from "../components/ProductCard.vue";

// login routes...
import UserRegister from '../views/Auth/UserRegister.vue';
import UserLogin from '../views/Auth/UserLogin.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart,
  },
  {
    path: '/product',
    name: 'product',
    component: SingleProduct,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
