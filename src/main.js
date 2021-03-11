import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import VueToastr from 'vue-toastr'

Vue.config.productionTip = true
Vue.use(VueToastr)

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
