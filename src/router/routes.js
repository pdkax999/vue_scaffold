/* 
所有路由配置的数组
*/
// import Home from '@/pages/Home'
// import Search from '@/pages/Search'

import Communication from "../Communication/Communication.vue";
import ScopeSlotTest from "../Communication/ScopeSlotTest/ScopeSlotTest.vue";


// import store from '@/store'
// import router from '@/router'

/* 
component: () => import('@/pages/Search')
1. import(modulePath): 动态import引入模块, 被引入的模块会被单独打包
2. 组件配置的是一个函数, 函数中通过import动态加载模块并返回, 
    初始时函数不会执行, 第一次访问对应的路由才会执行, 也就是说只有一次请求对应的路由路径才会请求加载单独打包的js
作用: 用于提高首屏的加载速度
*/

export default [
  {
  path: '',
  redirect:'/communication'


  },
  {
    path: '/communication',
    component: Communication,
    redirect:"/communication/model",
    children: [
      {
        path: 'scope-slot',
        component: ScopeSlotTest,
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'event',
        component: () => import('../Communication/EventTest/EventTest.vue'),
        meta: {
          isHideFooter: true

        },
      },
      {
        path: 'model',
        component: () => import('../Communication/ModelTest/ModelTest.vue'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'sync',
        component: () => import("../Communication/SyncTest/SyncTest.vue"),
        meta: {
          isHideFooter: true
        },
      },

    /*   ,
     
      {
        path: 'sync',
        component: () => import('@/pages/Communication/SyncTest/SyncTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'attrs-listeners',
        component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'children-parent',
        component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
        meta: {
          isHideFooter: true
        },
      },
      */
    ],
  },
]