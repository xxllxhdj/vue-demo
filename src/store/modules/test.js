const state = {
    count: 1
};

const getters = {
    formatCount: ({ count }) => {
        return count + '次';
    }
};

const mutations = {
    increment(state) {
        state.count++;
    }
};

const actions = {
    increment({ commit }) {
        commit('increment');
    },
    incrementAsync({ commit }) {
        setTimeout(() => {
            commit('increment')
        }, 1000);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
