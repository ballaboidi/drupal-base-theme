const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  runtimeCompiler: true,
  publicPath: process.env.VUE_APP_THEME_PATH,
  productionSourceMap: false,
  filenameHashing: false,
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    output: {
      filename: 'app.js'
    }
  },
  devServer: {
    allowedHosts: "all",
    devMiddleware: {
      writeToDisk: true,
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.resolve.symlinks(false)
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_OPTIONS_API__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  },
})
