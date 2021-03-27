import Vue from 'vue'
import App from './App.vue'

import FlashMessage from '@smartweb/vue-flash-message';
import VueFlashMessage from 'vue-flash-message';
import VueCookies from 'vue-cookies'
import VueMoment from 'vue-moment'

import { router } from './routes'

import 'vue-flash-message/dist/vue-flash-message.min.css'

Vue.config.productionTip = false

Vue.use(VueCookies);
Vue.use(FlashMessage);
Vue.use(VueMoment);
Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 2500,
  }
});

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
