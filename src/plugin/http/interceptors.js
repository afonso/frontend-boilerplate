'use strict'

export default (http, store, router) => {
  // https://github.com/mzabriskie/axios#interceptors
  http.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    config.headers['X-Request-Id'] = localStorage.getItem('requestId')
    return config
  },
  (error) => {
    return Promise.reject(error)
  })

  http.interceptors.response.use(
  (response) => {
    return response
  }, (error) => {
    const { response } = error
    if (response.status == 404) {
      store.dispatch('setMessage', { type: 'error', message: response.data.error.message })
      if (!store.state.messages.redirect) {
        router.push({ name: 'error.404' })
      }
      store.commit('messages', { redirect: '' })
    } else
    if (response.status == 410) {
      store.dispatch('setMessage', { type: 'error', message: response.data.error.message })
      if (!store.state.messages.redirect) {
        router.push({ name: 'error.expired' })
      }
      store.commit('messages', { redirect: '' })
    } else
    if (response.status == 500) {
      store.dispatch('setMessage', { type: 'error', message: response.data.error.message })
      if (!store.state.messages.redirect) {
        router.push({ name: 'error.500' })
      }
      store.commit('messages', { redirect: '' })
    } else {
      store.dispatch('setMessage', { type: 'error', message: response.data.error.message })
    }
    return Promise.reject(store)
  })
}
