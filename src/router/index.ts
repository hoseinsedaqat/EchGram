import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
  },
  {
    path:'/direct/inbox',
    name:'DirectView',
    component: () => import('@/views/Direct/DirectView.vue'),
  },
  {
    path:'/create/post',
    name:'PostView',
    component: () => import('@/views/Post/PostView.vue'),
  },
  {
    path: '/explore',
    name: 'ExploreView',
    component: () => import('@/views/Explore/ExploreView.vue'),
  },
  {
    path:'/accounts/activity',
    name:'ActivityView',
    component: () => import('@/views/Activity/ActivityView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
