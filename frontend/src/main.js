import Vue from 'vue'
import 'bootstrap'
import App from './App.vue'

import FlashMessage from '@smartweb/vue-flash-message'
import Snotify from 'vue-snotify'
import VueCookies from 'vue-cookies'
import VueMoment from 'vue-moment'

import { router } from './routes'

import 'vue-snotify/styles/material.css'

Vue.config.productionTip = false

Vue.use(VueCookies);
Vue.use(FlashMessage);
Vue.use(VueMoment);
Vue.use(Snotify, {
  toast: {
    timeout: 2500
  },
  showProgressBar: true,
  closeOnClick: false
});

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
