import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'registration-page',
       component: () => import('@/views/RegistrationPage.vue')
    },
    {
      path: '/event-flag',
      name: 'event-flag',
      component: () => import('../views/EventFlag.vue')
    },
    {
      path: '/account-page',
      name: 'account-page',
      component: () => import('../views/AccountPage.vue')
    },
    {
      path: '/main-page',
      name: 'main-page',
      component: () => import('../views/MainPage.vue')
    },
    {
      path: '/creation-event-page',
      name: 'creation-event-page',
      component: () => import('../views/CreationEventPage.vue')
    }
  ]
})

export default router
