// import {api} from "../../assets/http";

export default {
    loginAction({commit}, loginCredentials) {
        console.log(loginCredentials)
        commit('LOGIN_USER', loginCredentials)
    },

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
