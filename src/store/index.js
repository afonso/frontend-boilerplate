import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  messages: {
    success: '',
    error: '',
    redirect: '',
    title: ''
  },
  authenticated: false
}

const mutations = {
  authenticated (state, value) {
    state.authenticated = value
  },
  messages (state, value) {
    state.messages = value
  }
}

const actions = {
  setAuth ({ commit }, obj) {
    commit('authenticated', obj)
  },
  setMessages ({ commit }, obj) {
    commit('messages', obj)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
