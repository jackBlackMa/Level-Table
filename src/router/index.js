import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import SuperInput from '@/components/SuperInput'
import superSelect from '@/components/superSelect'
import TestSelect from '@/components/TestSelect'
import Fdf from '@/views/7-23/pdf'
import Edit from '@/views/edit/Edit'
import Life from '@/views/8-3/demo1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Life
    },
    {
      path: '/superSelect',
      name: 'superSelect',
      component: superSelect,
    }
  ]
})
