import Vue                          from 'vue';
import Vuex                         from 'vuex';
import createLogger                 from 'vuex/dist/logger';

import actions                      from './global/actions';
import getters                      from './global/getters';
import state                        from './global/state';
import mutations                    from './global/mutations';


Vue.use(Vuex);

let store = new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
    strict: process.env.MIX_APP_DEBUG,
    plugins: process.env.MIX_APP_DEBUG ? [createLogger()] : []
})
export default store;

