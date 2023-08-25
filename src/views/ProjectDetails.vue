<script setup>
import ProjectHeader from '@/components/ProjectDetails/ProjectHeader.vue'
import CarouselComp from '@/components/ProjectDetails/CarouselComp.vue'
import MembersProject from '@/components/ProjectDetails/MembersProject.vue'
import NewsProject from '@/components/ProjectDetails/NewsProject.vue'
import DescriptionProject from '@/components/ProjectDetails/DescriptionProject.vue'
import PublicationsProject from '@/components/ProjectDetails/PublicationsProject.vue'
import ProjectsApi from '@/api/projects'
import NewsApi from '@/api/news'
import MembersApi from '@/api/members'
import { ref, onMounted } from 'vue'


const projectsApi = new ProjectsApi()
const newsApi = new NewsApi()
const membersApi = new MembersApi()
const projectId = ref(null)
const project = ref(null)
const members = ref([])
const news = ref([])
const langs = ref([])


onMounted(
  fetchProject(),
  members.value = membersApi.getMembers(),
  news.value = newsApi.getNews(),
  langs.value = projectsApi.getLangs()
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

function getProjectLangs(project) {
  if (project.langsProject) {
    return project.langsProject.map(langId => {
      const lang = langs.value.find(lang => lang.id === langId)
      return lang ? lang : null
    }).filter(lang => lang !== null)
  } else {
    return []
  }
}

</script>

<template>
  <main v-if="project">
    <ProjectHeader :title="project.title" :key="project.id" :logo="project.logo" />
    <CarouselComp :images="project.images" />
    <DescriptionProject :logo="project.logo" :title="project.title" :langsProject="getProjectLangs(project)" :tags="project.tags" :published="project.published" :updated="project.updated" :version="project.version" :status="project.status" :type="project.type" :description="project.description" :access="project.access" :newField="project.newField" />
    <NewsProject :news="news" />
    <MembersProject :members=getProjectMembers(project) />
    <PublicationsProject />
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
