import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import { HomeLayout } from "../layout"

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

export const constantRouterMap = [
  {path: '/login', name: 'login', component: () => import('@/page/login/index'), hidden: false},
  {
    path: '',
    name: '',
    component: HomeLayout,
    meta: {
    },
    noDropdown: true,
    children: [
      {
          path: 'home',
          name: '首页',
          meta: {
          },
          component: () => import('@/page/home/index'),
      },{
            path: '/manageenter/listenter',
            name: 'mlistenter',
            meta: {
            },
            component: () => import('@/page/enterprise/listenter'),
      },{
        path: '/manageenter/addListenter',
        name: 'addListenter',
        meta: {
        },
        component: () => import('@/page/enterprise/addListenter'),
      },{
         path: 'manageuser/adduser',
         name: 'madduser',
         meta: {
        },
        component: () => import('@/page/manage/adduser'),
      },
      {
        path: 'warehouseManagement/invoiceEntry',
        name: 'invoiceEntry',
        meta: {
        },
        component: () => import('@/page/warehouseManagement/invoiceEntry'),
      },
      {
        path: 'warehouseManagement/invoiceManagement',
        name: 'invoiceManagement',
        meta: {
        },
        component: () => import('@/page/warehouseManagement/invoiceManagement'),
      },
      {
        path: 'warehouseManagement/receivingRegistration',
        name: 'receivingRegistration',
        meta: {
        },
        component: () => import('@/page/warehouseManagement/receivingRegistration'),
      },
      {
        path: 'warehouseManagement/installingBracketRecord',
        name: 'installingBracketRecord',
        meta: {
        },
        component: () => import('@/page/warehouseManagement/installingBracketRecord'),
      },
      {
        path: 'warehouseManagement/shelvesManagement',
        name: 'shelvesManagement',
        meta: {
        },
        component: () => import('@/page/warehouseManagement/shelvesManagement'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/', //process.env.BASE_URL,
  routes: constantRouterMap
})

export default router
