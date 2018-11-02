import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Fourofour from '@/components/Fourofour'

Vue.use(Router)

export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path:'*',
        name:"Fourofour",
        component: Fourofour
    }
  ]
})
