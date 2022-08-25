const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave: false,
  devServer: {
    https: true,


    client: {
      webSocketURL: 'wss://192.168.1.3:8081/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
