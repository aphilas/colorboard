import Vue from 'vue'
import App from './App.vue'
import '@simonwep/pickr/dist/themes/nano.min.css'; // pickr theme

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
