import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsSection from '@/components/HomeView/NewsSection.vue'
import ProjectsSection from '@/components/HomeView/ProjectsSection.vue'
import MemberSection from '@/components/HomeView/MemberSection.vue'
import PublicationsSection from '@/components/HomeView/PublicationsSection.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'noticias',
          component: NewsSection
        },
        {
          path: 'projetos',
          component: ProjectsSection
        },
        {
          path: 'membros',
          component: MemberSection
        },
        {
          path: 'publicacoes',
          component: PublicationsSection
        },
      ]
    },
  ]
})

export default router
