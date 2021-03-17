import Vue from 'vue'
import VueRouter from 'vue-router'

/* Components */

import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/404'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/signin', component: Login},
        {path: '*', component: NotFound},
    ]
})
