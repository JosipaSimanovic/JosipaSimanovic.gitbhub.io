import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import App from './App.vue'
import './registerServiceWorker'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './assets/css/style.css'
import VueQrcodeReader from "vue-qrcode-reader";
import router from './router'

Vue.use(VueQrcodeReader);

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
