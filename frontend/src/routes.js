import Vue from 'vue'
import VueRouter from 'vue-router'

/* Components */

import NotFound from './components/404'
import Home from './components/Home'
import Login from './components/Login'
import Verify from './components/Verify'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/signin', component: Login},
        {path: '/auth/verify/:id', component: Verify},
        {path: '*', component: NotFound},
    ]
})
