import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      //home   //推荐
      path: "/",
      component: () => import("../components/home.vue"),
      alias:"/discover",
      children: [
        {
          path:"",
          component:()=>import("../components/home/discover.vue"),
        },
        {
          //排行榜
          path: "/discover/toplist",
          component: () => import("../components/home/toplist.vue"),
          // children:[
          //   {
          //     path:"/discover/toplist",
          //     components:()=>import("../components/home/toplist.vue")
          //   }
          // ]
        },
        {
          //歌单
          path: "/discover/playlist",
          component: () => import("../components/home/playlist")
        },
        {
          //主播电台
          path: "/discover/djradio",
          component: () => import("../components/home/djradio.vue")
        },
        {
          //歌手
          path: "/discover/artist",
          component: () => import("../components/home/artist.vue"),
          children:[
            {
              path:"/discover/artist/:id",
              component:()=>import("../components/home/artist.vue")
            }
          ]
        },
        {
          //新碟上架
          path: "/discover/album",
          component: () => import("../components/home/album.vue")
        }
      ]
    },
    {
      //我的音乐
      path: "/my",
      component: () => import("../components/my.vue")
    },
    {
      //朋友
      path: "/friend",
      component: () => import("../components/friend")
    },
    {
      //下载客户端
      path: "/download",
      component: () => import("../components/download")
    }
  ]
});
