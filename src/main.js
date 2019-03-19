import Vue                          from 'vue'
import App                          from './App.vue'
import Vuex                         from 'vuex'
import VueRouter                    from 'vue-router'
import store                        from './assets/js/store';
import router                       from './assets/js/router';
import Element                      from 'element-ui'
import                              'element-ui/lib/theme-chalk/index.css';
import axios                        from 'axios'
import VueAxios                     from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Element)
Vue.use(VueAxios, axios)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
