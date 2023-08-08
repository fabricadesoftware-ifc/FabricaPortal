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
const modalHidden = ref(true);

const toggleModal = () => {
  modalHidden.value = !modalHidden.value;
};
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
      <header>
        <h3>Sobre esse projeto</h3>
        <button @click="toggleModal">
          <box-icon name='right-arrow-alt'></box-icon>
        </button>
      </header>
      <p>{{ project.description }}</p>
    </section>
    <div :class="['modal', { hide: modalHidden }]" id="modal">
      <header>
        <button @click="toggleModal">Fechar</button>
      </header>
      <div>
        bla
      </div>
    </div>
    <MembersProject :members=getProjectMembers(project) />
  </main>
</template>

<style scoped>
#modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: var(--light-gray);
  padding: 10px;
  z-index: 10;
}

#modal {
  transition: 0.2s;
  opacity: 1;
  pointer-events: all;
}


#modal.hide,
.hide {
  opacity: 0;
  pointer-events: none;
}



main {
  padding: var(--pn-main) 19em;

}

p {
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}

main section {
  width: 100%;
  margin: 30px 0;
}

.description header {
  display: flex;
  align-items: center;
  gap: 15px;
}

button {
  border-radius: 50%;
  border: none;
  padding: 5px;
  margin: 0;
  cursor: pointer;
  background-color: transparent;
  transition: var(--effect)
}
button:hover {
  background-color: var(--light-gray);
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
}</style>
