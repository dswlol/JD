import Vue from 'vue'
import Vuex from 'vuex'
import car from "./stores/car/index"
import user from "./stores/user/index"
import imgs from "./stores/imgs/index"
import classify from "./stores/classify/index"
Vue.use(Vuex)

export default new Vuex.Store({
   modules:{
   	  car,
      user,
      imgs,
      classify
   }
})
