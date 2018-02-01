'use strict'

const env = (name, defaultValue) => process.env[name] || defaultValue

module.exports = {
  development: {
    apis: {
      auth:               env('AUTH_API', 'http://localhost:3002/'),
      blog:               env('BLOG_API', 'http://localhost:3003/')
    }
  },
  testing: {
    apis: {
      auth:               env('AUTH_API', 'http://localhost:3002/'),
      blog:               env('BLOG_API', 'http://localhost:3003/')
    }
  },
  staging: {
    apis: {
      auth:               env('AUTH_API', 'http://localhost:3002/'),
      blog:               env('BLOG_API', 'http://localhost:3003/')
    }
  },
  production: {
    apis: {
      auth:               env('AUTH_API', 'http://localhost:3002/'),
      blog:               env('BLOG_API', 'http://localhost:3003/')
    }
  }
}
