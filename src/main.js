import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import api from '@/api/index'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'medium'});
Vue.prototype.$axios = api;

new Vue({
  router,
  store,
  el:'#app',
  render: h => h(App)
}).$mount('#app')
