import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.config.productionTip = false

const v = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$http = {};
Vue.prototype.$http.get = (...args) => {
  return new Promise((rs, rj) => {
    axios.get(...args).then((res) => {
      const data = res.data
      if (data.status === 0) {
        Vue.$router.push('/login')
        return
      }
      rs(res.data)
    }).catch((err) => {
      rj(err)
    })
  })
};
Vue.prototype.$http.post = (...args) => {
  return new Promise((rs, rj) => {
    axios.post(...args).then((res) => {
      const data = res.data
      if (data.status === 0) {
        console.log(v)
        v.$router.push('/login')
        return
      }
      rs(res.data)
    }).catch((err) => {
      rj(err)
    })
  })
}

