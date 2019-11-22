import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:()=>import("../App"),
      children:[
        { //推荐
          path:"/discover",
          components:()=>import("../components/home/home.vue")
        },{
          path:"/discover/toplist"
        },{
          path:"/discover/playlist"
        },{
          path:"/discover/djradio"
        },{
          path:"/discover/artist"
        },{
          path:"/discover/album"
        }
      ]
    },{
      path:"/my"
    }
  ]
})
