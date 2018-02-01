'use strict'

import Vue from 'vue'
import axios from 'axios'
import router from 'root/router'
import * as config from 'root/config'
import interceptors from './interceptors'

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Credentials': true
}

export const submissions = axios.create({
  baseURL: config.submissionsApiUrl,
  headers: defaultHeaders
})

export const account = axios.create({
  baseURL: config.accountApiUrl,
  headers: defaultHeaders
})

export const auth = axios.create({
  baseURL: config.authApiUrl,
  headers: defaultHeaders
})

export const forms = axios.create({
  baseURL: config.formsApiUrl,
  headers: defaultHeaders
})

export const passwordRecovery = axios.create({
  baseURL: config.passwordRecoveryApiUrl,
  headers: defaultHeaders
})

export const signup = axios.create({
  baseURL: config.signupApiUrl,
  headers: defaultHeaders
})

export default function install (Vue, { store, router }) {
  interceptors(auth, store, router)
  interceptors(forms, store, router)
  interceptors(passwordRecovery, store, router)
  interceptors(signup, store, router)
  interceptors(account, store, router)
  interceptors(submissions, store, router)
  Object.defineProperty(Vue.prototype, '$auth', {
    get () {
      return auth
    }
  })
  Object.defineProperty(Vue.prototype, '$forms', {
    get () {
      return forms
    }
  })
  Object.defineProperty(Vue.prototype, '$passwordRecovery', {
    get () {
      return passwordRecovery
    }
  })
  Object.defineProperty(Vue.prototype, '$signup', {
    get () {
      return signup
    }
  })
  Object.defineProperty(Vue.prototype, '$account', {
    get () {
      return account
    }
  })
  Object.defineProperty(Vue.prototype, '$submissions', {
    get () {
      return submissions
    }
  })
}
