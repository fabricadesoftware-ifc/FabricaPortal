<script setup>
import { ref, onMounted} from 'vue'
import ProjectHeader from '@/components/ProjectDetails/ProjectHeader.vue'
import CarouselComp from '@/components/ProjectDetails/CarouselComp.vue'
import MembersProject from '@/components/ProjectDetails/MembersProject.vue'
import DescriptionProject from '@/components/ProjectDetails/DescriptionProject.vue'
import ProjectsApi from '@/api/projects'
import NewsApi from '@/api/news'
import MembersApi from '@/api/members'
import PublicationsApi from '@/api/publications'
import AreasComp from '@/components/ProjectDetails/AreasComp.vue'

import { useProjectsStore } from '@/stores'
import router from '@/router'

const projectsStore = useProjectsStore()

const publicationsApi = new PublicationsApi()
const projectsApi = new ProjectsApi()
const newsApi = new NewsApi()
const membersApi = new MembersApi()

const projectId = ref(null)
const publications = ref([])
const project = ref(null)
const members = ref([])
const news = ref([])
const langs = ref([])

onMounted(async () => {
  fetchProject()
  members.value = membersApi.getMembers()
  news.value = newsApi.getNews()
  langs.value = projectsApi.getLangs()
  publications.value = publicationsApi.getThreePublications()

  await projectsStore.getProjectById(router.currentRoute.value.params.id)
  console.log(projectsStore.state.selectedProject)
})

async function fetchProject() {
  const path = window.location.pathname
  const projectIdFromUrl = path.substring(path.lastIndexOf('/') + 1)
  projectId.value = projectIdFromUrl
  project.value = projectsApi.getProjectById(projectId.value)
}
</script>

<template>
  <main>
    <!-- {{ projectsStore.state.selectedProject }} -->
    <!-- {{ projectsStore.state.selectedProject }} -->
    <!-- <ProjectHeader :title="project.title" :key="project.id" :logo="project.logo" /> -->
    <ProjectHeader :title="projectsStore.state.selectedProject?.name" :key="project?.id" />
    <CarouselComp :images="[projectsStore.state.selectedProject?.image]" />
    <DescriptionProject
      :logo="project?.image?.file"
      :title="projectsStore.state.selectedProject?.name"
      :description="projectsStore.state.selectedProject?.about"
    />
    <!-- <NewsProject v-if="getNewsProject(project) != ''" :news="getNewsProject(project)" /> -->
    <AreasComp />
    <MembersProject :members="projectsStore.state.selectedProject?.members" />
    <!-- <MembersProject :members="projectsStore.state.selectedProject?.members" /> -->
    <!-- <PublicationsProject v-if="getProjectPublication(project) != ''" :publications="getProjectPublication(project)"/> -->
  </main>
</template>

<style scoped>
main {
  padding: var(--pn-main) 19em;
  display: flex;
  gap: 33px;
  flex-direction: column;
}

main section {
  width: 100%;
}
@media only screen and (max-width: 1224px) {
  main {
    padding: var(--pn-main) 10em;
  }
}
@media only screen and (max-width: 768px) {
  main {
    padding: var(--pn-main) 6em;
  }
}
@media only screen and (max-width: 600px) {
  main {
    padding: var(--pn-main) 2em;
  }
  
}
@media only screen and (max-width: 375px) {
  main {
    padding: var(--pn-main) 1em;
  }
}
</style>
