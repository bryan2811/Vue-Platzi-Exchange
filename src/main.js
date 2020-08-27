import Vue from 'vue' // Importa la librería desde NPM
import App from './App.vue' // Importa el componente App
import '@/assets/css/tailwind.css' // Importa Tailwind
import '@/router'
import router from '@/router'
import { dollarFilter } from '@/filters'
import { percentFilter } from '@/filters'

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  //Instancia de Vue
  router: router,
  render: h => h(App)
}).$mount('#app')
