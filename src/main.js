import './firebase'
import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueFire from 'vuefire'

Vue.use(VueFire);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')