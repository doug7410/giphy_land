import Vue from 'vue'
import App from './App.vue'
import store from './store'

import {VueMasonryPlugin} from 'vue-masonry';

Vue.use(VueMasonryPlugin)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
