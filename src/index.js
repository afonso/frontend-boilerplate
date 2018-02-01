'use strict'

import Vue from 'vue'
import App from 'components/App.vue'
import router from 'root/router'
import store from 'root/store'
import Axios from 'axios'
import Buefy from 'buefy'

import { sync } from 'vuex-router-sync'
import httpPlugin from 'root/plugins/http'

// styles
import 'assets/sass/main.scss'
import 'buefy/lib/buefy.min.css'

router.beforeEach((to, from, next) => {
  if (auth.checkAuth() || store.state.authenticated) {
    if (to.matched.some(record => record.meta.onlyGuest)) {
      router.push('/dashboard')
    } else {
      next()
    }
  } else {
    if (to.matched.some(record => record.meta.auth)) {
      router.push('/login')
    } else {
      next()
    }
  }
})

Vue.use(Buefy)
Vue.prototype.$http = Axios
Vue.config.productionTip = false

Vue.use(httpPlugin, {
  store,
  router
})

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
