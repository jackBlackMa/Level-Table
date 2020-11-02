import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import SuperInput from '@/components/SuperInput'
import superSelect from '@/components/superSelect'
import TestSelect from '@/components/TestSelect'
import Edit from '@/views/Edit'
import Model from '@/views/8-19/demo1'
import Demo1 from "@/views/10-31/Demo1"

Vue.use(Router)

const routes= [
  {
    path: '/',
    name: 'home',
    component: Demo1,
    meta: {
      title: 'home',
      keepAlive: true
    }
  },
  {
    path: '/superSelect',
    name: 'superSelect',
    component: superSelect,
  }
]

// 构建路由
const router = new Router({
  mode: 'history',
  routes,
  // 参考地址 - https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#%E5%BC%82%E6%AD%A5%E6%BB%9A%E5%8A%A8
  scrollBehavior(to, from, savedPosition) {
    debugger
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
})

export default router
