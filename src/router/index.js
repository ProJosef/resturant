import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import service from '../views/service.vue'
import Menu from '../views/Menu.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component : AboutView
  },
  {
    path: '/service',
    name: 'service',
    component : service
  },
  {
    path: '/menu',
    name: 'menu',
    component : Menu
  },
  {
    path: '/contact',
    name: 'contact',
    component : Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
