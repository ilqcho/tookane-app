import axios from 'axios';

const state = {
    orders: [],
    totalResults: null,
};

const actions = {
    async fetchOrders({ commit }, payload) {
        const response = await axios.get('http://localhost:4000/api/v1/deliveries/', 
        {
            params: payload
        });
        commit('setTotalResults', response.data.data.totalResults)
        commit('setOrders', response.data.data.deliveries)
    },
};

const mutations = {
    setOrders(state, orders) {
        state.orders = orders;
    },
    setTotalResults(state, totalResults) {
        state.totalResults = totalResults;
    },
};

const getters = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};