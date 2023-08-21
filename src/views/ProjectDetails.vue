<script setup>
import ProjectHeader from '@/components/ProjectDetails/ProjectHeader.vue'
import ProjectGallery from '@/components/ProjectDetails/ProjectGallery.vue'
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

onMounted(
  fetchProject(),
  members.value = membersApi.getMembers(),
  news.value = newsApi.getNews()
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

</script>

<template>
  <main v-if="project">
    <ProjectHeader :title="project.title" :key="project.id" :logo="project.logo" />
    <ProjectGallery :images="project.images" />
    <DescriptionProject :logo="project.logo" :title="project.title" :description="project.description" />
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
