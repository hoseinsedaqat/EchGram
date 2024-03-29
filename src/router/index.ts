import Vue from 'vue';

import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

import activityRouter from '@/utils/checkRouteWidth';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: async () => await import('@/views/Home/HomeView.vue'),
  },
  {
    path:'/direct/inbox',
    name:'DirectView',
    component: async () => await import('@/views/Direct/DirectView.vue'),
  },
  {
    path:'/create/post',
    name:'PostView',
    component: async () => await import('@/views/Post/PostView.vue'),
  },
  {
    path: '/explore',
    name: 'ExploreView',
    component: async () => await import('@/views/Explore/ExploreView.vue'),
  },
  {
    path: '/accounts/activity',
    name:'ActivityView',
    beforeEnter:activityRouter,
    component: async () => await import('@/views/Activity/ActivityView.vue'),
  },
  {
    path: '/hoseinsedaqat',
    name: 'ProfileView',
    component: async () => await import('@/views/Profile/ProfileView.vue'),
  },
  {
    path:'/post/hoseinsedaqat/:id',
    name: 'ProfilePostSingle',
    component: async () => await import('@/views/Profile/Components/ProfilePostSingle.vue'),
  },
  {
    path: '/accounts/edit',
    name: 'AccountsEditView',
    component: async () => await import('@/views/AccountEdit/AccountEditView.vue'),
  },
  {
    path:'/direct/inbox/:id',
    name: 'DirectMobile',
    beforeEnter:activityRouter,
    component: async () => await import('@/views/Direct/Components/MobileDirect.vue'),
  },
  {
    path: '/qr',
    name: 'QrcodeView',
    component: async () => await import('@/views/Qrcode/QrcodeView.vue'),
  },
  {
    path: '/saved',
    name: 'SavedView',
    component: async () => await import('@/views/Saved/SavedView.vue'),
  },
  {
    path: '/report/problem',
    name: 'ReportProblemView',
    component: async () => await import('@/views/Report/ReportProblemView.vue'),
  },
  {
    path: '*',
    name: 'ErrorPage',
    component: async () => await import('@/views/ErrorView/ErrorPage.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { x: 0 , y: 0, behavior: 'smooth'}
  },
  routes
})

export default router;
