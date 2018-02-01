'use strict'
/* eslint-disable global-require */
export const View = r => require.ensure([], () => r(require('root/views/Clients')), 'clients-bundle')

export const Entry = r => require.ensure([], () => r(require('./Entry')), 'clients-bundle')
export const Edit = r => require.ensure([], () => r(require('./Edit')), 'clients-bundle')
export const Show = r => require.ensure([], () => r(require('./Show')), 'clients-bundle')
export const Add = r => require.ensure([], () => r(require('./Add')), 'clients-bundle')
