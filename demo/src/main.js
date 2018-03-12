import Vue from 'vue'
import App from './App.vue'
import ProgressBar from 'plugin'

Vue.use(ProgressBar)

new Vue({
  el: '#app',
  render: h => h(App)
})
