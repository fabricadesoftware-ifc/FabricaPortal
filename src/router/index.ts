import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MemberProfile from '../views/MemberProfile.vue'
import MembersView from '../views/MembersView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/members',
      name: 'members',
      component: MembersView,
    },
    {
      path: "/member/:id",
      name: "member",
      component: MemberProfile,
      props: true,
    },
  ]
})

export default router
