
import Vue from 'vue'
import App from './App'
import router from './router'
import "../static/css/common.css"
import "swiper/css/swiper.css"
import Axios from "axios"
import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import "./mock"
import store from "./store/index"
Vue.use(ElementUi)

//路由导航守卫
// router.beforeEach(( to,from,next)=>{

// })
Vue.prototype.$axios = Axios
const Bus = new Vue() 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



