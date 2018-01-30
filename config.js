'use strict'

const env = (name, defaultValue) => process.env[name] || defaultValue

module.exports = {
  development: {
    apis: {
      auth:               env('AUTH_API', 'http://localhost:3002/')
    }
  },
  testing: {
    apis: {
      auth:               env('AUTH_API', 'https://testing.api-auth.sabes.org.br')
    }
  },
  staging: {
    apis: {
      auth:               env('AUTH_API', 'https://staging.api-auth.sabes.org.br')
    }
  },
  production: {
    apis: {
      auth:               env('AUTH_API', 'https://api-auth.sabes.org.br')
    }
  }
}
