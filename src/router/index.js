import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Categories from '@/components/Categories'
import Product from '@/components/Product'
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
            path: '/categories',
            name: 'Categories',
            component: Categories
        },
        {
            path:'/product/:productId',
            name: "Product",
            component: Product,
            props: true
        },
        {
            path:'*',
            name:"Fourofour",
            component: Fourofour
        }
    ]
})
