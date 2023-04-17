import axios from 'axios';

const state = {
    baseUrl: 'http://localhost:4000/api/v1/deliveries/',
    orders: [],
    order: [],
    totalResults: null,
};

const actions = {
    async fetchOrders({ commit }, payload) {
        const response = await axios.get(state.baseUrl, 
        {
            params: payload
        });
        commit('setTotalResults', response.data.data.totalResults)
        commit('setOrders', response.data.data.deliveries)
    },
    async fetchOrder({ commit }, id) {
        const response = await axios.get(state.baseUrl + id);
        console.log(response.data.data)
        commit('setOrder', response.data.data)
    },
};

const mutations = {
    setOrders(state, orders) {
        state.orders = orders;
    },
    setOrder(state, order) {
        state.order = order;
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