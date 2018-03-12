import Vue from 'vue'
import ProgressBar from './ProgressBar.vue'

const plugin = {
  install(Vue, options) {
  	Vue.component('ProgressBar', ProgressBar)
  }
}

export default plugin
