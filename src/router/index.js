import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/login',
    redirect:'/'
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/applier',
    name: 'applier',
    component: ()=> import('../views/Applier')
  },
  {
    path: '/applieritem',
    name: 'applieritem',
    component: ()=> import('../views/ApplierItem')
  },
  {
    path: '/noticedetails',
    name: 'noticedetails',
    component: ()=> import('../views/NoticeDetails')
  },
  {
    path: '/newapply',
    name: 'newapply',
    component: ()=> import('../views/NewApply')
  },
  {
    path: '/applicationconfirm',
    name: 'applicationconfirm',
    component: ()=> import('../views/ApplicationConfirm')
  },
  {
    path: '/othertable134',
    name: 'othertable134',
    component: ()=> import('../views/Othertable134')
  },
  {
    path: '/othertableconfirm',
    name: 'othertableconfirm',
    component: ()=> import('../views/OthertableConfirm')
  },
  {
    path: '/businessplan',
    name: 'businessplan',
    component: ()=> import('../views/BusinessPlan')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router