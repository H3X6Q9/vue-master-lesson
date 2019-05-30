import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.component('Demo', {
  template: `
    <div>template</div>
  `,
  render: h => <div>render</div>
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')