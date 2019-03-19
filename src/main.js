import Vue                          from 'vue'
import App                          from './App.vue'
import Vuex                         from 'vuex'
import VueRouter                    from 'vue-router'
import store                        from './assets/js/store';
import router                       from './assets/js/router';
import Element                      from 'element-ui'
import                              'element-ui/lib/theme-chalk/index.css';

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
