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
        class: 'yellow'
      },
      component: () => import('@/views/about/about.vue'),
    },
    {
      path: '/work',
      name: 'work',
      meta: {
        title: 'Work',
        class: 'dark-15'
      },
      component: () => import('@/views/work/work.vue'),
    },
    {
      path: '/work/Institutional',
      name: 'work-Institutional',
      meta: {
        title: 'Institutional',
        class: 'yellow',
        noMenu: true,

      },
      component: () => import('@/views/work/Institutional/index.vue'),
    },
    {
      path: '/work/Residential',
      name: 'work-Residential',
      meta: {
        title: 'Residential',
        class: 'yellow',
        noMenu: true,

      },
      component: () => import('@/views/work/Residential/index.vue'),
    },
    {
      path: '/work/Others',
      name: 'work-Others',
      meta: {
        title: 'Others',
        class: 'yellow',
        noMenu: true,

      },
      component: () => import('@/views/work/Others/index.vue'),
    },
    {
      path: '/work/AI',
      name: 'work-AI',
      meta: {
        title: 'AI in Architecture',
        class: 'yellow',
        noMenu: true,
      },
      component: () => import('@/views/work/AI/AI.vue'),
    },
    {
      path: '/learning',
      name: 'learning',
      meta: {
        title: 'Learning',
        class: 'dark-15'
      },
      component: () => import('@/views/learning/learning.vue'),
    },
    {
      path: '/research',
      name: 'research',
      meta: {
        title: 'Research',
        class: 'dark-15'
      },
      component: () => import('@/views/research/research.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: 'Contact',
      },
      component: () => import('@/views/contact/contact.vue'),
    },

  ],
})

// 路由守卫
router.beforeEach((to, from) => {
  document.body.classList.forEach(item => {
    document.body.classList.remove(item)
  })
  if (to.meta && to.meta.class) {
    document.body.classList.add(to.meta.class)
  }
  return true
})

export default router
