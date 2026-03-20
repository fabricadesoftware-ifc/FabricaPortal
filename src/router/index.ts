import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/members',
      name: 'members',
      component: () => import('../views/MembersView.vue'),
    },
    {
      path: '/member/:id',
      name: 'member',
      component: () => import('../views/MemberProfileView.vue'),
      props: true,
    },
    {
      path: '/all-news',
      name: 'all-news',
      component: () => import('../views/NewsView.vue'),
    },
    {
      path: '/news/:id',
      name: 'news',
      component: () => import('../views/NewsDetailsView.vue'),
      props: true,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/project/:id',
      name: 'project',
      component: () => import('../views/ProjectDetailsView.vue'),
      props: true,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
