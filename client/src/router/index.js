import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Docs from '../views/Docs.vue'
import AutobotView from '../views/AutobotView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/docs',
      name: 'docs',
      component: Docs
    },
    {
      path: '/details/:id',
      name: 'details',
      component: AutobotView
    }
  ]
})

export default router
