'use strict'
/* eslint-disable global-require */
export const View = r => require.ensure([], () => r(require('root/views/Login')), 'login-bundle')

export const Entry = r => require.ensure([], () => r(require('./Entry')), 'login-bundle')
export const Forgot = r => require.ensure([], () => r(require('./Forgot')), 'login-bundle')
export const Recover = r => require.ensure([], () => r(require('./Recover')), 'login-bundle')
