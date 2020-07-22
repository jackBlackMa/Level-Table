import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import SuperInput from '@/components/SuperInput'
import Select from '@/components/Select'
import Collapse from '@/views/collapse'
import quickLayout from '@/views/quickLayout'
import Icon from '@/views/icon'
import Indeterminate  from '@/views/indeterminate'
import Form  from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Form
    },
    {
      path: '/emmet',
      name: 'emmet',
      component: quickLayout
    },
    {
      path: '/icon',
      name: 'icon',
      component: Icon
    },
    {
      path: '/indeterminate',
      name: 'indeterminate',
      component: Indeterminate
    }

  ]
})
