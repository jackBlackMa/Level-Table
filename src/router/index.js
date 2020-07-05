import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import SuperInput from '@/components/SuperInput'
import Select from '@/components/Select'
import Collapse from '@/views/collapse'
import quickLayout from '@/views/quickLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Collapse
    },
    {
      path: '/emmet',
      name: 'emmet',
      component: quickLayout
    }
  ]
})
