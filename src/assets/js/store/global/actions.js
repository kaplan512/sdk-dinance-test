// import axios                        from 'axios'
// import VueAxios                     from 'vue-axios'
export default {
    fetchFile({commit}) {
        let file = require('../../../../../public/transactions')
        commit('FETCH_DATA', file)
        // Tried to make it work, but I couldn't make JSON work from local computer
        // axios.get('../transactions.json').then((response) => {
        //     console.log(response)
        // })
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
