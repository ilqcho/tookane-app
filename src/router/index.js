import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Orders from '../views/Orders.vue'
import Order from '../views/Order.vue'
import LayoutLogin from '../layouts/LayoutLogin.vue';
import LayoutDefault from '../layouts/LayoutDefault.vue';
import store from '../store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { 
        title: 'Login',
        layout: LayoutLogin 
      }
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      meta: { 
        title: 'Orders',
        layout: LayoutDefault 
      },
    },
    //TODO: VER COMO PASAR ID POR ACA
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: { 
        title: 'Order',
        layout: LayoutDefault 
      },
    },
  ]
})

//Set title when path change and protect routes with auth
router.beforeEach((to, from, next) => {
	store.commit('setTitle', to.meta.title);
	if (store.getters['auth/isAuthenticated'] == false && to.name !== 'login') {
		return next({ name: 'login' });
	}
	return next();
});

export default router
