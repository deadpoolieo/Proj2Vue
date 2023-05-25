const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'/',
  lintOnSave:false,
  devServer:{
    // disableHostCheck:true,
    open:true,//自动打开浏览器
    port:8081,
    proxy:{
      '/':{
      // 连接到后端的路径
        ws:false,
        target:'http://localhost:8082/user/',
        changeOrigin:true,
        secure:false,
        pathRewrite:{
          '^/':'/'
        }
      }
    }
  }
})
