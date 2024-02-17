import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: {
        name: 'blog'
      },
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: '/blog',
          name: 'blog',
          component: () => import('../views/BlogView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
      ]
    },
    
    {
      path: '/pathologic',
      name: 'pathologic',
      component: () => import('../layouts/pathologic.vue'),
      redirect: {
        name: 'menu'
      },
      children: [
        {
          path: '/pathologic/menu',
          name: 'menu',
          component: () => import('../pathologic/menu.vue')
        },
        {
          path: '/pathologic/play',
          name: 'play',
          component: () => import('../pathologic/play.vue')
        },
      ]
    }
  ]
})

export default router
