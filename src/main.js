import Vue from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'
import store from './store'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
