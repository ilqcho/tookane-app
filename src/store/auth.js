const state = {
    isAuthenticated: false,
};

const actions = {
    login({ commit }, { email, password }) {

        if (email && password) {
            commit("authenticate");
            return true;
        }
        return false;
    },
};

const mutations = {
    authenticate(state) {
        state.isAuthenticated = true;
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