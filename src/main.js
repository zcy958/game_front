import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router";
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$message = ElementUI.Message
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};