import Vue from 'vue'
import App from './App.vue'

// 引入router配置文件
import router from './router'
// 引入Vuex的实例store
import store from './store'
// 引入混入    未来用不要动
// import mixins from "./mixin/index"
// Vue.minix(mixins)
// 全局混入
const mixin = {
  filters: {
    tofix (val) {
      return val.toFixed(2)
    },
    omitted (val) {
      return val > 10000 ? parseInt(val / 10000) + '.' + parseInt((val % 10000) / 1000) + '万' : val
    },
    cartFix (val) {
      return val > 99 ? 99 + '+' : val
    }
  }
}

Vue.mixin(mixin)

// 引入MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 全局注册MintUI
Vue.use(MintUI);

//映入vue-jsonp请求
import jsonp from "vue-jsonp"
Vue.use(jsonp)

// 把所有的axios请求方法导入并赋值给$http
import * as $http from "./request/axios"
Vue.prototype.$http=$http;

Vue.config.productionTip = false

//导航守卫
router.beforeEach((to,from,next)=>{
	   next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
