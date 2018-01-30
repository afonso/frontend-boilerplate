import Vue from 'vue'
import Router from 'vue-router'
import Home from 'root/views/Home'
import * as forms from 'components/forms'
import * as login from 'components/login'
import * as signup from 'components/signup'
import * as errors from 'components/errors'
import * as profile from 'components/profile'
import * as dashboard from 'components/dashboard'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/signup',
      component: signup.View,
      meta: { onlyGuest: true },
      children: [
        {
          name: 'signup',
          path: '',
          component: signup.Entry
        }, {
          name: 'signup.validate',
          path: 'validate',
          component: signup.Validate
        }, {
          name: 'signup.profile',
          path: 'profile/:id',
          component: signup.Profile
        }, {
          name: 'signup.profileextra',
          path: 'extra/:id',
          component: signup.ProfileExtra
        }, {
          name: 'signup.confirmation',
          path: ':id',
          component: signup.Confirmation
        }, {
          name: 'signup.conclusion',
          path: 'conclusion/:id',
          component: signup.Conclusion
        }, {
          name: 'signup.terms',
          path: 'terms',
          component: signup.Terms
        }
      ]
    },
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
      path: '/dashboard',
      component: dashboard.View,
      meta: { auth: true },
      children: [
        {
          name: 'dashboard',
          path: '',
          component: dashboard.Entry
        },
        {
          name: 'dashboard.continue',
          path: 'continue',
          component: dashboard.Continue
        },
        {
          name: 'dashboard.finished',
          path: 'finished',
          component: dashboard.Finished
        },
        {
          name: 'dashboard.autocontinue',
          path: 'autocontinue',
          component: dashboard.Autocontinue
        },
        {
          name: 'dashboard.answers',
          path: 'answers/:id',
          component: dashboard.Answers
        }
      ]
    },
    {
      path: '/forms',
      component: forms.View,
      meta: { auth: true },
      children: [
        {
          name: 'forms',
          path: '',
          component: forms.Entry
        },
        {
          name: 'forms.edit',
          path: 'edit',
          component: forms.Entry
        }
      ]
    },
    {
      path: '/error',
      component: errors.View,
      children: [
        {
          name: 'error',
          path: '',
          component: errors.Error404
        }, {
          name: 'error.404',
          path: '404',
          component: errors.Error404
        }, {
          name: 'error.500',
          path: '500',
          component: errors.Error500
        }, {
          name: 'error.expired',
          path: 'expired',
          component: errors.ExpiredToken
        }
      ]
    },
    {
      path: '/profile',
      component: profile.View,
      meta: { auth: true },
      children: [
        {
          name: 'profile',
          path: '',
          component: profile.Entry
        }, {
          name: 'profile.help',
          path: 'help',
          component: profile.Help
        }, {
          name: 'profile.password',
          path: 'password',
          component: profile.Password
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
