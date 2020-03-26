import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级组件
import Dashborad from '../views/dashboard/Dashborad.vue'
const Login = () => import('../views/login/Login.vue')

// 二级组件
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Eat = () => import('../views/eat/Eat.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Mine = () => import('../views/mine/Mine.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/dashboard'
  },
  {
    // 根页面
    path: '/dashboard',
    name: 'dashboard',
    component: Dashborad,
    // 二级路由不需要加 '/'
    children: [
      {
        path: '/dashboard',
        redirect: '/dashboard/home'
      },
      {
        // 主页
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        // 分类
        path: 'category',
        name: 'category',
        component: Category
      },
      {
        // 吃什么
        path: 'eat',
        name: 'eat',
        component: Eat
      },
      {
        // 购物车
        path: 'cart',
        name: 'cart',
        component: Cart
      },
      {
        // 我的
        path: 'mine',
        name: 'mine',
        component: Mine
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router
