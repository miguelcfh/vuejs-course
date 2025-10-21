import Vue from 'vue'
import LoginScreen from './Login.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(LoginScreen),
}).$mount('#app')
