import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, _from, savedPosition) => {
    if (savedPosition) return savedPosition
    // Leaves room for the navbar.
    if (to.hash) return { el: to.hash, top: 112, behavior: 'smooth' }
    return { top: 0 }
  },
})
