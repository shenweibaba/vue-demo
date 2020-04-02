import Vue from 'vue'
import Router from 'vue-router'
// 导出elementUi
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)

import HelloWorld from '@/components/HelloWorld'
import index from "@/components/index"
import firstPage from "@/components/first/firstPage"
import secondPage from "@/components/second/secondPage"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/first',
      name: 'firstPage',
      component: firstPage
    },{
      path: '/second',
      name: 'secondPage',
      component: secondPage
    }
  ]
})
