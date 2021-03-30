import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueCarousel from 'vue-carousel';

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueCarousel);

new Vue({

  router,
  render: h => h(App),
}).$mount('#app')
