import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Orders from '../views/Orders.vue'
import Order from '../views/Order.vue'
import LayoutLogin from '../layouts/LayoutLogin.vue';
import LayoutDefault from '../layouts/LayoutDefault.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { layout: LayoutLogin }
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      meta: { layout: LayoutDefault },
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: { layout: LayoutDefault },
    },
  ]
})

export default router
