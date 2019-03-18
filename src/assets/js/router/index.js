import Vue                  from 'vue';
import VueRouter            from 'vue-router';
import Default              from './modules/Default';
import store                from "../store";



Vue.use(VueRouter);

const routes = [].concat();

const Router = new VueRouter({
    mode: 'history',
    routes: routes.concat(Default),
    // scrollBehavior (to, from, savedPosition) {
    //     return { x: 0, y: 0 }
    // }
});

Router.beforeEach((to, from, next) => {
    let loggedin = store.state.login;
    console.log(loggedin)
    console.log({to, from, next})
    if(to === 'login' && loggedin.email) {
        console.log('not empty')
    } else {
        console.log('empty')
    }
    return next();
});

export default Router