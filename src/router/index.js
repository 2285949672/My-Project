import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/mac',
    name: 'mac',
    component: () => import('../views/Mac.vue')
  },
  {
    path:'/shop',
    name:'shop',
    component:() => import('../views/Shop.vue')
  },
  {
    path:'/ipad',
    name:'ipad',
    component:() => import('../views/IPad.vue')
  },
  {
    path:'/iphone',
    name:'iphone',
    component:() => import('../views/IPhone.vue')
  },
  {
    path:'/watch',
    name:'watch',
    component:() => import('../views/Watch.vue')
  },
  {
    path:'/airpods',
    name:'airpods',
    component:() => import('../views/AirPods.vue')
  },
  {
    path:'/homepod',
    name:'homepod',
    component:() => import('../views/HomePod.vue')
  },
  {
    path:'/technology',
    name:'technology',
    component:() => import('../views/Technology.vue')
  },
  {
    path:'/parts',
    name:'parts',
    component:() => import('../views/Parts.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
