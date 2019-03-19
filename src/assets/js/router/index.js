import Vue                  from 'vue';
import VueRouter            from 'vue-router';
import Default              from './modules/Default';


Vue.use(VueRouter);

const routes = [].concat();

const Router = new VueRouter({
    mode: 'history',
    routes: routes.concat(Default),

});

Router.beforeEach((to, from, next) => {
    let loggedIn = null
    if (localStorage.getItem("login")) {
        loggedIn = JSON.parse(localStorage.getItem('login'))
    }

    if(to.name === 'login' && loggedIn) {
        return next({name: 'transactions'});
    } else if (to.name === 'transactions' && !loggedIn) {
        return next({name: 'login'});
    }
    return next();
});

export default Router

