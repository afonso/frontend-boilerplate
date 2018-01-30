const path = require('path')
const pkg = require('./package')
const env = process.env.NODE_ENV
const config = require('./config')[env]

module.exports = {
  entry: [
    'src/polyfills.js',
    'src/index.js'
  ],
  html: {
    title: pkg.productName,
    description: pkg.description,
    template: path.join(__dirname, 'index.ejs')
  },
  postcss: {
    plugins: [
      require('postcss-nested'),
      require('postcss-property-lookup')
    ]
  },
  presets: [
    require('poi-preset-bundle-report')(),
    require('poi-preset-offline')({
      pwa: './src/pwa.js', // Path to pwa runtime entry
      pluginOptions: {} // Additional options for offline-plugin
    })
  ],
  env: {
    AUTH_API_URL: config.apis.auth
  },
  webpack (config) {
    config.node = {
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
    }
    config.output.path = path.resolve(__dirname, `dists/${env}`)
    config.plugins.push(new WebpackAssetsManifest({
      output: path.resolve(__dirname, 'static/manifest.json'),
      merge: true
    }))
    config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      async: true
    }))
    config.plugins.push(new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 10000
    }))
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    }))
    config.plugins.push(new ExtractTextPlugin({
      filename: 'build.min.css',
      allChunks: true,
    }))
    config.resolve.alias = {
      root: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets')
    }
    return config
  }
}
