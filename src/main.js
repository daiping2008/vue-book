import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './lang'
import '@/assets/styles/icon.css'
import '@/assets/fonts/daysOne.css'
import '@/assets/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
