import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Orders from '../views/Orders.vue'
import Order from '../views/Order.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
  ]
})

export default router
