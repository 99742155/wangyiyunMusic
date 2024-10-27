import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { Toast } from 'vant'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  /* 主页 */
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  /* 歌单 */
  {
    path: '/songlist',
    name: 'songlist',
    component: () => import('../views/SongListView.vue')
  },
  /* 引导页 */
  {
    path: '/guidePage',
    name: 'guidePage',
    component: () => import("../components/public/GuidePage.vue")
  },
  /* 每日推荐 */
  {
    path: '/dailyrecommend',
    name: 'dailyrecommend',
    component: () => import("../views/DailyRecommendSongLists")
  },
  /* 搜索页 */
  {
    path: '/searchsong',
    name: 'searchsong',
    component: () => import("../views/SearchSongView.vue")
  },
  /* 搜索结果页 */
  {
    path: '/searchresult',
    name: 'searchresult',
    component: () => import("../views/SearchResult.vue")
  },
  /*   歌曲评论
    {
      path: '/songcomment',
      name: 'songcomment',
      component: () => import("../components/basce/SongComment")
    }, */
  /* 广告页 */
  {
    path: "/advertisement",
    name: "advertisement",
    component: () => import("../components/public/AdvertisementCom.vue"),
    /* beforeEnter: (to, from, next) => {
      let guidePage = window.localStorage.getItem("guidePage");
      if (guidePage) {
        next();
      } else {
        next("/guidePage");
      }
    } */
  },
  /* 登陆页 */
  {
    path: '/login',
    name: 'login',
    component: () => import("../components/basce/LoginBase.vue")
  },
  /* 歌单广场 */
  {
    path: '/songlistsquare',
    name: 'songlistsquare',
    component: () => import("../views/SongListSquare.vue")
  },
  /* 用户信息 */
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () => import("../views/UserInfo.vue"),
    // 独享路由守卫
    beforeEnter: (to, from, next) => {
      if (to.path === from.path) {
        next(); // 如果目标路由和当前路由相同，直接继续
      } else {
        let login = window.localStorage.getItem("token");
        // 判断是否登录
        if (!login) {
          Toast("请先登录!");
          next("/login");
        } else {
          next();
        }
      }
    }
    
  },
]

// 解决router重复点击报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router