const path = require('path');
module.exports = {
  // 配置使用stylus全局变量
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  },
  transpileDependencies: [],
  devServer: {
    open: true,
    port: 9901,     // 端口号
    // lintOnSave: false,
    proxy: {
        '/api': {
            target: 'http://localhost:9909', // 请求的接口的域名
            //secure: false,  // 如果是https接口，需要配置这个参数
            logLevel: 'debug',
            changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
            pathRewrite: {
                '^/api': '/'
            }
        },
    },
  },
}