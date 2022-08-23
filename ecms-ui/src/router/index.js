import Vue from 'vue'
import VueRouter from 'vue-router'
import loginIndex from '../components/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: loginIndex
  }
]

const router = new VueRouter({
  routes
})

export default router
