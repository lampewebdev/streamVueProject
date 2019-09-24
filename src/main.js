import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
  data: {
      liked: true
    }
}).$mount('#app')
