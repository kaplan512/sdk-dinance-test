// import {api} from "../../assets/http";

export default {
    fetchFile({commit}) {
        let file = require('../../../../../public/transactions')
        commit('FETCH_DATA', file)
    },
    sortData({commit}, type) {
        commit('SORT_DATA', type)
    }

    // fetchSchedule({commit}, params) {
    //     api('user.getSchedule', {}, {user_id: +params})
    //         .then(response => {
    //             commit('FETCH_SCHEDULE', response)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    //
    // fetchChatMessages({commit}, messages) {
    //     commit('FETCH_CHAT_MESSAGES', messages)
    // },

};
