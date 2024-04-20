import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },

    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue')
    },

    // Apartment view route
    {
      path: '/apartments/:id',
      name: 'apartment',
      component: () => import('@/views/ApartmentView.vue')
    },
    // Apartment view route
    {
      path: '/apartments/',
      name: 'apartament',
      component: () => import('@/views/ApartmentsIndexView.vue')
    },


    // Book
    {
      path: '/book',
      name: 'book',
      meta: { title: 'Book' },
      component: () => import('@/views/BookView.vue')
    },

    {
      path: '/pay/success',
      name: 'pay-success',
      meta: { title: 'Payment Success' },
      component: () => import('@/views/BookView.vue')
    },
  ]
})

// set title tag by route name
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || 'Hotel'} | ${import.meta.env.VITE_APP_NAME}`
  next()
})

export default router
