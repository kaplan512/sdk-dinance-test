export default {
    fetchFile({commit}) {
        let file = require('../../../../../public/transactions')
        commit('FETCH_DATA', file)
    },
    sortData({commit}, type) {
        commit('SORT_DATA', type)
    },
    filterByProperty({commit}, property) {
        commit('FILTER_BY_PROPERTY', property)
    },
    setActivePage({commit}, page) {
        commit('SET_ACTIVE_PAGE', page)
    },
    clearFilter({commit}) {
        commit('CLEAR_FILTER')
    },

};
