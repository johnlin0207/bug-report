// import {devEnv} from './conf/dev.env.js'
const devEnv = require('./conf/dev.env')

const devProxy = ['/pc'];
const env = process.env.NODE_ENV;
let target = '';
// 默认是本地环境
if (env === 'production') {  // 生产环境
  //target = proEnv.hosturl;
} else if (env === 'test') { // 测试环境
  //target = uatEnv.hosturl;
} else {  // 本地环境
  target = devEnv.hosturl;
}
// 生成代理配置对象
let proxyObj = {};
devProxy.forEach((value, index) => {
  proxyObj[value] = {
    target: target,
    changeOrigin: true,
    pathRewrite: {
      [`^${value}`]: value
    }
  };
});
console.log(proxyObj)
module.exports = {
  runtimeCompiler: true,
  publicPath: '/',
  devServer: {
    // open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: 'http://localhost:3000', // string | Object
    before: app => {
    }
  }
}
