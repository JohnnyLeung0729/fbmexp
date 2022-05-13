const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    // 由于本项目数据通过easy-mock和mockjs模拟，不存在跨域问题，无需配置代理;
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
})