import Vue from 'vue'
import App from 'components/App.vue'
import router from 'root/router'
import store from 'root/store'

import { sync } from 'vuex-router-sync'

// styles
import 'assets/sass/main.scss'

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

Vue.config.productionTip = false

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
