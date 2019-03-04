import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/header'
import Login from '../components/login'
import Home from '../components/home'
import Todo from '../components/todo'
import Report from '../components/report'
import User from '../components/user'
import NotFound from '../components/notFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      component: Header,
      children: [
        {
          path: '/',
          name: 'main',
          component: Home
        },
        {
          path: '/todo',
          name: 'emails',
          component: Todo
        },
        {
          path: '/report',
          name: 'profile',
          component: Report
        },
        {
          path: '/user',
          name: 'user',
          component: User
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
