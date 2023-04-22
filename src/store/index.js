import { createStore } from 'vuex'
import auth from './auth';
import orders from './orders';

const store = createStore({
  
    modules: {
        auth,
        orders,
    },
    state: {
        title: '',
    },
    getters: {
        title({ title }) {
            return title;
        },
    },
    mutations: {
        setTitle(state, title) {
            state.title = title;
        },
    },
})

//If localStorage has email value, set authenticated to true
if (window.localStorage.email) {
	store.commit('auth/authenticate', true);
}

export default store;