'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import Home from 'root/views/Home'
import * as clients from 'components/clients'
import * as login from 'components/login'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      component: login.View,
      meta: { onlyGuest: true },
      children: [
        {
          name: 'login',
          path: '',
          component: login.Entry
        }, {
          name: 'login.forgot',
          path: 'forgot',
          component: login.Forgot
        }, {
          name: 'login.recover',
          path: 'recover/:id',
          component: login.Recover
        }
      ]
    },
    {
      path: '/clients',
      component: clients.View,
      children: [
        {
          name: 'clients',
          path: '',
          component: clients.Entry
        },
        {
          name: 'clients.add',
          path: 'add',
          component: clients.Add,
          meta: { auth: true }
        },
        {
          name: 'clients.edit',
          path: 'edit/:id',
          component: clients.Edit,
          meta: { auth: true }
        },
        {
          name: 'clients.show',
          path: 'show/:id',
          component: clients.Show
        }
      ]
    },
    {
      path: '*',
      name: 'home',
      component: Home
    }
  ]
})
