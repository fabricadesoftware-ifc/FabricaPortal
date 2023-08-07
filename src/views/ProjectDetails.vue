<script setup>
import ProjectDetails from '@/components/ProjectDetails/ProjectDetails.vue'
import MembersProject from '@/components/ProjectDetails/MembersProject.vue'
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
    <section>
      <ProjectDetails :title="project.title" :status="project.status" :key="project.id" :description="project.description"
        :images="project.images" :type="project.type" :logo="project.logo" :langs="project.langs" />
    </section>
    <section class="galeria">
      <img class="lg" :src="project.images" alt="">
    </section>
    <section class="description">
      <h3>Sobre esse projeto</h3>
      <p>{{ project.description }}</p>
    </section>
    <MembersProject :members=getProjectMembers(project) />
  </main>
</template>

<style scoped>
main {
  padding: var(--pn-main) 19em;

}

p {
  text-align: justify;
}

main section {
  width: 100%;
  margin: 30px 0;
}

.description p {
  margin-top: 5px;
}

main .midias {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
}

.galeria .lg {
  width: 100%;
}
</style>
