import { createStore } from 'vuex'

const store = createStore({
  state: {
    count: 0,
    email: null,
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
        state.count--
    },
    setEmail(state, value){
        state.email = value;
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  getters: {
    count: state => state.count,
    email: state => state.email,
  }
})

export default store