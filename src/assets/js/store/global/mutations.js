// import Vue                          from 'vue';
// import defaultValues                from './defaultValues'

const mutations = {
    LOGIN_USER(state,  loginCredentials) {
        state.login.password = loginCredentials.password
        state.login.email = loginCredentials.email
    }
}
export default mutations;
