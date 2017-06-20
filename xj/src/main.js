// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/js/response'
import './assets/main.less'
import 'less-loader'
import 'less'
import router from './router'
import VueVideoPlayer from 'vue-video-player'

Vue.config.productionTip = false
Vue.use(VueVideoPlayer)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
