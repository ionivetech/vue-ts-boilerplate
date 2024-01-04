import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import FirstLayout from '@/layouts/FirstLayout.vue'
import SecondLayout from '@/layouts/SecondLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: FirstLayout },
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { layout: SecondLayout },
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

export default router
