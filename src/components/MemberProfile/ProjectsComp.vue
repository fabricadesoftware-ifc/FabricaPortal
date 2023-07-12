<script setup>
import ProjectCard from '@/components/MemberProfile/ProjectCard.vue'
import { ref, onMounted } from 'vue'
import MembersApi from '@/api/members'
import ProjectsApi from '@/api/projects'

defineProps({
  image: String,
  name: String,
  description: String,
  background: String,
  occupation: {
    type: Object
  },
})

const membersApi = new MembersApi()
const projectsApi = new ProjectsApi()

const memberId = ref(null)
const member = ref(null)
const projects = ref([])

onMounted(fetchMemberProjects)
async function fetchMemberProjects() {
  const path = window.location.pathname
  const memberIdFromUrl = path.substring(path.lastIndexOf('/') + 1)
  memberId.value = memberIdFromUrl

  member.value = membersApi.getMemberById(memberId.value)
  if (member.value && member.value.projectIds) {
    const projectIds = member.value.projectIds
    for (const projectId of projectIds) {
      const project = projectsApi.getProjectsById(projectId)
      if (project) {
        projects.value.push(project)
      }
    }
  }
}
</script>
<template>
  <section v-if="projects.length > 0" class="projects">
    <h3>Projetos</h3>
    <div class="container">
      <ProjectCard
        v-for="project of projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :type="project.type"
        :status="project.status"
      />
    </div>
  </section>
</template>
<style scoped>
section .container {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
section p {
  font-weight: 500;
  color: #252525;
  margin: 10px;
}
</style>
