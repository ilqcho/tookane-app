const state = {
    isAuthenticated: false,
};

const actions = {
    login({ commit }, { email, password }) {

        if (email && password) {
            commit("authenticate", true);
            window.localStorage.setItem('email', email);
        }
    },
    logout({ commit }) {
        commit("authenticate", false);
        window.localStorage.removeItem('email');    
    },
};

const mutations = {
    authenticate(state, value) {
        state.isAuthenticated = value;
    },
};

const getters = {
    isAuthenticated: (state) => state.isAuthenticated,
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};