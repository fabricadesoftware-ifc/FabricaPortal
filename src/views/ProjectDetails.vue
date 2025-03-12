<script setup>
import { ref, onMounted} from 'vue'
import ProjectHeader from '@/components/ProjectDetails/ProjectHeader.vue'
import CarouselComp from '@/components/ProjectDetails/CarouselComp.vue'
import MembersProject from '@/components/ProjectDetails/MembersProject.vue'
import NewsProject from '@/components/ProjectDetails/NewsProject.vue'
import DescriptionProject from '@/components/ProjectDetails/DescriptionProject.vue'
import PublicationsProject from '@/components/ProjectDetails/PublicationsProject.vue'
import ProjectsApi from '@/api/projects'
import NewsApi from '@/api/news'
import MembersApi from '@/api/members'
import PublicationsApi from '@/api/publications'

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

function filterMembersByIds(memberIds) {
  return memberIds.map((memberId) => {
    const member = members.value.find((m) => m.id === memberId)
    return member || null
  }).filter(Boolean)
}

function filterNewsByIds(newsIds) {
  return newsIds.map((newId) => {
    const Inew = news.value.find((n) => n.id === newId)
    return Inew || null
  }).filter(Boolean)
}

function filterPublicationsByIds(publicationIds) {
  return publicationIds.map((publicationId) => {
    const publication = publications.value.find((p) => p.id === publicationId)
    return publication || null
  }).filter(Boolean)
}

function filterLangsByIds(langIds) {
  return langIds.map((langId) => {
    const lang = langs.value.find((l) => l.id === langId)
    return lang || null
  }).filter(Boolean)
}

function getProjectMembers(project) {
  return project.projectMembers ? filterMembersByIds(project.projectMembers) : []
}

function getNewsProject(project) {
  return project.projectNews ? filterNewsByIds(project.projectNews) : []
}

function getScholarshipMembers(project) {
  return project.scholarshipMembers ? filterMembersByIds(project.scholarshipMembers) : []
}

function getCoordMembers(project) {
  return project.coordMembers ? filterMembersByIds(project.coordMembers) : []
}

function getProjectPublication(project) {
  return project.projectPublication ? filterPublicationsByIds(project.projectPublication) : []
}

function getProjectLangs(project) {
  return project.languagesUsed ? filterLangsByIds(project.languagesUsed) : []
}

</script>

<template>
  <main v-if="project">
    <!-- {{ projectsStore.state.selectedProject }} -->
    <!-- <ProjectHeader :title="project.title" :key="project.id" :logo="project.logo" /> -->
    <ProjectHeader :title="projectsStore.state.selectedProject?.name" :key="project.id" :logo="project.logo" />
    <CarouselComp :images="[projectsStore.state.selectedProject?.image]" />
    <DescriptionProject
      :logo="project.logo"
      :title="project.title"
      :languagesUsed="getProjectLangs(project)"
      :tags="project.tags"
      :published="project.published"
      :updated="project.updated"
      :version="project.version"
      :status="project.status"
      :coordMembers="getCoordMembers(project)"
      :scholarshipMembers="getScholarshipMembers(project)"
      :type="project.type"
      :description="projectsStore.state.selectedProject?.about"
      :accessDetails="project.accessDetails"
      :partnerCompanies="project.partnerCompanies"
      :customFields="project.customFields"
    />
    <NewsProject v-if="getNewsProject(project) != ''" :news="getNewsProject(project)" />
    <MembersProject :members="projectsStore.state.selectedProject?.members" />
    <!-- <MembersProject :members="projectsStore.state.selectedProject?.members" /> -->
    <PublicationsProject v-if="getProjectPublication(project) != ''" :publications="getProjectPublication(project)"/>
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
