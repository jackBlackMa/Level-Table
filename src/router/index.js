import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import SuperInput from '@/components/SuperInput'
import TestSelect from '@/components/TestSelect'
import Fdf from '@/views/7-23/pdf'
import Edit from '@/views/edit/Edit'
import Life from '@/views/8-3/demo1'
import superSelect from '@/views/8-10/demo1'
import LongSearch from '@/components/LongSearch'
import Event from "@/views/9-1/index"
import Box from '@/views/9-17/demo1'
import SuperForm from '@/views/9-17/demo2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:"/dist/",
  routes: [
    {
      path: '/',
      name: 'Test',
      component: SuperForm
    },
    {
      path: '/superSelect',
      name: 'superSelect',
      component: superSelect,
    }
  ]
})
