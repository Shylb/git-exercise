import Vue from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
