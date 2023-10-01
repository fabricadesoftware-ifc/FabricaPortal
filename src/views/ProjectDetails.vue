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

onMounted(
  fetchProject(),
  (members.value = membersApi.getMembers()),
  (news.value = newsApi.getNews()),
  (langs.value = projectsApi.getLangs()),
  (publications.value = publicationsApi.getThreePublications())
)

async function fetchProject() {
  const path = window.location.pathname
  const projectIdFromUrl = path.substring(path.lastIndexOf('/') + 1)
  projectId.value = projectIdFromUrl
  return (project.value = projectsApi.getProjectById(projectId.value))
}
function getProjectMembers(project) {
  if (project.projMembers) {
    return project.projMembers
      .map((memberId) => {
        const member = members.value.find((member) => member.id === memberId)
        return member ? member : null
      })
      .filter((member) => member !== null)
  }
}
function getNewsProject(project) {
  if (project.projNews) {
    return project.projNews
      .map((newId) => {
        const Inew = news.value.find((Inew) => Inew.id === newId)
        return Inew ? Inew : null
      })
      .filter((Inew) => Inew !== null)
  }
}
function getScholarshipMembers(project) {
  if (project.scholarshipMembers) {
    return project.scholarshipMembers
      .map((memberId) => {
        const member = members.value.find((member) => member.id === memberId)
        return member ? member : null
      })
      .filter((member) => member !== null)
  }
}
function getCoordMembers(project) {
  if (project.coordMembers) {
    return project.coordMembers
      .map((memberId) => {
        const member = members.value.find((member) => member.id === memberId)
        return member ? member : null
      })
      .filter((member) => member !== null)
  }
}
function getProjectPublication(project) {
  if (project.projPublication) {
    return project.projPublication
      .map((publicationId) => {
        const publication = publications.value.find((publication) => publication.id === publicationId)
        return publication ? publication : null
      })
      .filter((publication) => publication !== null)
  }
}
function getProjectLangs(project) {
  if (project.langsProject) {
    return project.langsProject
      .map((langId) => {
        const lang = langs.value.find((lang) => lang.id === langId)
        return lang ? lang : null
      })
      .filter((lang) => lang !== null)
  } else {
    return []
  }
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
    <NewsProject v-if="getNewsProject(project) != null" :news="getNewsProject(project)" />
    <MembersProject :members="getProjectMembers(project)" />
    <PublicationsProject v-if="getProjectPublication(project)" :publications="getProjectPublication(project)"/>
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
</style>
