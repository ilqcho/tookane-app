import { createStore } from 'vuex'
import auth from './auth';
import orders from './orders';

const store = createStore({

  state: {},

  mutations: {},

  getters: {},

  actions: {},
  
  modules: {
    auth,
    orders,
  }
})

export default store;