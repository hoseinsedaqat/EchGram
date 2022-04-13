import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#ffb000'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
        ]
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#ffb000'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
        ]
      }
    }
  },
  {
    path:'/direct/inbox',
    name:'DirectView',
    component: () => import('@/views/Direct/DirectView.vue'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#ffb000'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
        ]
      }
    }
  },
  {
    path:'/create/post',
    name:'PostView',
    component: () => import('@/views/Post/PostView.vue'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#ffb000'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
        ]
      }
    }
  },{
    path: '/explore',
    name: 'ExploreView',
    component: () => import('@/views/Explore/ExploreView.vue'),
    meta: {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#ffb000'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
        ]
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
