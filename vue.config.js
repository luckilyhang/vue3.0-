const path = require('path')
module.exports = {
  configureWebpack:{
      resolve:{
        alias:{
          'public':path.resolve('./public') //设置别名
        }
      }
  },
  devServer: {
    proxy: {
        '/api': {
            target: 'http://apiwebjst.cbi360.net',
            ws: true,
            changOrigin: true, //开启代理
            pathRewrite: {
                '^/api': ''
            }
        }
    }
},
publicPath: './'
}