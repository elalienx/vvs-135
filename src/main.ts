import Vue from 'vue'
import App from './App.vue'
// @ts-ignore
import { RecycleScroller } from 'vue-virtual-scroller'

Vue.component('RecycleScroller', RecycleScroller)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
