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
          component:()=>import("../components/discover/discover.vue")
        },
        {
          //排行榜
          path: "/discover/toplist",
          component: () => import("../components/discover/toplist.vue")
        },
        {
          //歌单
          path: "/discover/playlist",
          component: () => import("../components/discover/playlist")
        },
        {
          //主播电台
          path: "/discover/djradio",
          component: () => import("../components/discover/djradio.vue")
        },
        {
          //歌手
          path: "/discover/artist",
          component: () => import("../components/discover/artist.vue")
        },
        {
          //新碟上架
          path: "/discover/album",
          component: () => import("../components/discover/album.vue")
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
