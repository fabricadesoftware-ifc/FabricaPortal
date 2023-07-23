import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MemberProfile from '../views/MemberProfile.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import MembersView from '../views/MembersView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AboutUs from '../views/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/members',
      name: 'members',
      component: MembersView
    },
    {
      path: '/member/:id',
      name: 'member',
      component: MemberProfile,
      props: true
    },
    {
      path: '/project/:id',
      name: 'project',
      component: ProjectDetails,
      props: true
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    }
  ]
})

export default router
