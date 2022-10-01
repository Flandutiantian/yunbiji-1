const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  publicPath: process.env.NODE_ENV === 'production'
    ? '/yunbiji-website/'
    : '/',

  transpileDependencies: true,

  runtimeCompiler: true,

  lintOnSave: false,
  devServer: {
    https: true,

    proxy: {
      '/': {
        target: 'http://localhost:8080/', // 本地后端地址
        changeOrigin: true, //允许跨域
        ws: false
      }
    }
  }
})
