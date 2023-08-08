<script setup>
import ProjectHeader from '@/components/ProjectDetails/ProjectHeader.vue'
import ProjectGallery from '@/components/ProjectDetails/ProjectGallery.vue'
import MembersProject from '@/components/ProjectDetails/MembersProject.vue'
import DescriptionProject from '@/components/ProjectDetails/DescriptionProject.vue'
import ProjectsApi from '@/api/projects'
import MembersApi from '@/api/members'
import { ref, onMounted } from 'vue'


const projectsApi = new ProjectsApi()
const membersApi = new MembersApi()
const projectId = ref(null)
const project = ref(null)
const members = ref([])

onMounted(
  fetchProject(),
  members.value = membersApi.getMembers()
)

async function fetchProject() {
  const path = window.location.pathname
  const projectIdFromUrl = path.substring(path.lastIndexOf('/') + 1)
  projectId.value = projectIdFromUrl
  return (project.value = projectsApi.getProjectById(projectId.value))
}
function getProjectMembers(project) {
  if (project.membersProject) {
    return project.membersProject
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
    <MembersProject :members=getProjectMembers(project) />
  </main>
</template>

<style scoped>
main {
  padding: var(--pn-main) 19em;

}
main section {
  width: 100%;
  margin: 30px 0;
}
</style>
