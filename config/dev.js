
const HOST = '"https://clinic.100care.cn"'
const HOST_M = '"https://m.you.163.com"'
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
    devServer: {
        proxy: {
          '/api/': {
            target: JSON.parse(HOST),
            pathRewrite: {
              '^/api/': '/'
            },
            changeOrigin: true
          },
          '/api-m/': {
            target: JSON.parse(HOST_M),
            pathRewrite: {
              '^/api-m/': '/'
            },
            changeOrigin: true
          }
        }
      }
  }
}
