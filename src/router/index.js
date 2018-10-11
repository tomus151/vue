import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Obrazek from '@/components/Obrazek'
import Divs from '@/components/Divs'

Vue.use(Router)

export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
        path: '/products',
        name: 'Products',
        component: Obrazek
    },
    {
        path: '/accounts',
        name: 'Konto',
        component: Divs
    }
  ]
})
