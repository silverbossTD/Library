import Vue from 'vue'
import VueRouter from 'vue-router'

/* Components */

import NotFound from './components/404'
import Home from './components/Home'
import Books from './components/Books'
import Login from './components/Login'
import Verify from './components/Verify'
import Information from './components/Information'

/* Components setting */

import Setting from './components/Setting'
import Profile from './components/setting/Profile'
import Upload from './components/setting/Upload'
import YouBooks from './components/setting/Books'
import EditBook from './components/setting/Edit'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/books', component: Books},
        {path: '/signin', component: Login},
        {path: '/auth/verify/:id', component: Verify},
        {path: '/informationbook/:id', component: Information},

        {
            path: '/setting',
            component: Setting,
            children: [
                {path: '/setting/profile', component: Profile},
                {path: '/setting/upload', component: Upload},
                {path: '/setting/yourbooks', component: YouBooks},
                {path: '/setting/editbook/:id', component: EditBook},
            ]
        },

        {path: '*', component: NotFound},
    ]
})
