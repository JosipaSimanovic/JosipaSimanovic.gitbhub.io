import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import App from './App.vue'
import './registerServiceWorker'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './assets/css/style.css'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
