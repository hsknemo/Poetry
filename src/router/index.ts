import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/layout.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About',
      },
      component: () => import('@/views/about/about.vue'),
    },
    {
      path: '/work',
      name: 'work',
      meta: {
        title: 'Work',
      },
      component: () => import('@/views/work/work.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: 'Contact',
      },
      component: () => import('@/views/contact/contact.vue'),
    },
    {
      path: '/learning',
      name: 'learning',
      meta: {
        title: 'Learning',
      },
      component: () => import('@/views/learning/learning.vue'),
    },
    {
      path: '/research',
      name: 'research',
      meta: {
        title: 'Research',
      },
      component: () => import('@/views/research/research.vue'),
    },
  ],
})

export default router
