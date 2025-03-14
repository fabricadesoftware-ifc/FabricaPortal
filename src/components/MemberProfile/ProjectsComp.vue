<script setup>
import ProjectCard from '@/components/MemberProfile/ProjectCard.vue'
import { ref, onMounted } from 'vue'
import MembersApi from '@/api/members'
import ProjectsApi from '@/api/projects'
import { useProjectsStore } from '@/stores'

const membersApi = new MembersApi()
const projectsApi = new ProjectsApi()
const projectsStore = useProjectsStore()

const memberId = ref(null)
const member = ref(null)
const projects = ref([])

async function fetchMemberProjects() {
  const path = window.location.pathname
  const memberIdFromUrl = path.substring(path.lastIndexOf('/') + 1)
  memberId.value = memberIdFromUrl

  member.value = membersApi.getMemberById(memberId.value)
  if (member.value && member.value.projectIds) {
    const projectIds = member.value.projectIds
    for (const projectId of projectIds) {
      const project = projectsApi.getProjectById(projectId)
      if (project) {
        projects.value.push(project)
      }
    }
  }
}


onMounted(async() => {
  await fetchMemberProjects()
 
})

</script>
<template>
  <section v-if="projectsStore.state.filteredProjects != ''">
    <h3>Projetos</h3>
    <div class="projects">
      <ProjectCard
        v-for="project of projectsStore.state.filteredProjects"
        :key="project.id"
        :title="project.name"
        :description="project.about"
        :logo="project.logo"
        :linkProject="project"
        :type="project.type"
        :status="project.state"
      />
    </div>
  </section>
  <section v-else class="notFound">
    <h3>Projetos</h3>
    <p>Nenhum projeto encontrado</p>
  </section>
</template>
<style scoped>
section .projects {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

section .notFound {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
}
</style>
