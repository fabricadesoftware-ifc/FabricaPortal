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
  return project.projMembers ? filterMembersByIds(project.projMembers) : []
}

function getNewsProject(project) {
  return project.projNews ? filterNewsByIds(project.projNews) : []
}

function getScholarshipMembers(project) {
  return project.scholarshipMembers ? filterMembersByIds(project.scholarshipMembers) : []
}

function getCoordMembers(project) {
  return project.coordMembers ? filterMembersByIds(project.coordMembers) : []
}

function getProjectPublication(project) {
  return project.projPublication ? filterPublicationsByIds(project.projPublication) : []
}

function getProjectLangs(project) {
  return project.langsProject ? filterLangsByIds(project.langsProject) : []
}

</script>

<template>
  <main v-if="project">
    <ProjectHeader :title="project.title" :key="project.id" :logo="project.logo" />
    <CarouselComp :images="project.images" />
    <DescriptionProject
      :logo="project.logo"
      :title="project.title"
      :langsProject="getProjectLangs(project)"
      :tags="project.tags"
      :published="project.published"
      :updated="project.updated"
      :version="project.version"
      :status="project.status"
      :coordMembers="getCoordMembers(project)"
      :scholarshipMembers="getScholarshipMembers(project)"
      :type="project.type"
      :description="project.description"
      :access="project.access"
      :partnerCompanies="project.partnerCompanies"
      :newField="project.newField"
    />
    <NewsProject v-if="getNewsProject(project) != ''" :news="getNewsProject(project)" />
    <MembersProject :members="getProjectMembers(project)" />
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
