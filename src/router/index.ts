import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)


// for responsive mobile design pages
// eslint-disable-next-line
// test show activity for difrent devices
function testRouter(to:any,from:any,next:any){
  if(innerWidth > 1000){
    next({
      path:'/'
    })
  }else{
    next()
    const test = (document.getElementById('dropdownMenu2')! as HTMLElement);
    test.removeAttribute('data-toggle')
  }
}

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
    beforeEnter:testRouter,
    component: () => import('@/views/Activity/ActivityView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
