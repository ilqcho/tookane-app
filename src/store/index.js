import { createStore } from 'vuex'
import auth from './auth';

const store = createStore({

  state: {},

  mutations: {},

  getters: {},

  actions: {
      checkAuth(){
      }
  },
  modules: {
    auth,
  }
})

export default store;


//Initial load
// store.dispatch('checkAuth');