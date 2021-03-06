import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)


// for responsive mobile design pages
// eslint-disable-next-line
// test show activity for difrent devices
// eslint-disable-next-line
function activityRouter(to:any,from:any,next:any){
  if(innerWidth > 800){
    return
  }else{
    next()
    // const test = (document.getElementById('ownDropDownContent')! as HTMLElement);
    // test.remove()
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
    path: '/accounts/activity',
    name:'ActivityView',
    beforeEnter:activityRouter,
    component: () => import('@/views/Activity/ActivityView.vue')
  },
  {
    path: '/hoseinsedaqat',
    name: 'ProfileView',
    component: () => import('@/views/Profile/ProfileView.vue')
  },
  {
    path:'/p/test',
    name: 'ProfilePostSingle',
    component: () => import('@/views/Profile/Components/ProfilePostSingle.vue')
  },
  {
    path: '/accounts/edit',
    name: 'AccountsEditView',
    component: () => import('@/views/AccountEdit/AccountEditView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
