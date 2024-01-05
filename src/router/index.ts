import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import FirstLayout from '@/layouts/FirstLayout.vue'
import SecondLayout from '@/layouts/SecondLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter',
      meta: { layout: FirstLayout },
      component: () => import('@/views/CounterView.vue')
    },
    {
      path: '/about',
      name: 'your-name',
      meta: { layout: SecondLayout },
      component: () => import('@/views/YourNameView.vue')
    }
  ]
})

export default router
