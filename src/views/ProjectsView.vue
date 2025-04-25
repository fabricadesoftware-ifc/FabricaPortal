<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import ProjectsCard from '@/components/common/ProjectsCard.vue'
import ProjectFilterComp from '@/components/ProjectsView/ProjectFilterComp.vue'
import PaginationButtons from '@/components/common/PaginationButtons.vue'
import MembersApi from '@/api/members'
import { useProjectsStore } from '@/stores'

const projectsStore = useProjectsStore()
const membersApi = new MembersApi()
const members = ref([])
const filter = ref({
  name: '',
  status: ''
})
const isLoading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    isLoading.value = true
    const [membersData, projectsData] = await Promise.all([
      membersApi.getMembers(),
      projectsStore.getProjects()
    ])
    members.value = membersData
  } catch (err) {
    error.value = 'Ocorreu um erro ao carregar os projetos. Por favor, tente novamente.'
    console.error('Erro ao carregar dados:', err)
  } finally {
    isLoading.value = false
  }
})

function removeAccents(name) {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const filteredProjects = computed(() => {
  const filterNameAccentless = removeAccents(filter.value.name.toLowerCase())
  
  return projectsStore.state.projects.filter((project) => {
    const projectTitle = removeAccents(project.name.toLowerCase())
    const filteredByName = projectTitle.includes(filterNameAccentless)
    const filteredByStatus = !filter.value.status || project.state === filter.value.status
    
    return filteredByName && filteredByStatus
  })
})

function getProjectMembers(project) {
  if (project.projectMembers) {
    return project.projectMembers
      .map((memberId) => {
        const member = members.value.find((member) => member.id === memberId)
        return member ? member : null
      })
      .filter((member) => member !== null)
  } else {
    return project.members || []
  }
}

function changeFilter(f) {
  filter.value = f
}

const itemsPerPage = 9
const currentPage = ref(1)
const pages = computed(() => {
  return Math.ceil(filteredProjects.value.length / itemsPerPage)
})

const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return filteredProjects.value.slice(startIndex, endIndex)
})

function changePage(page) {
  currentPage.value = page
}

watch(filter, () => {
  currentPage.value = 1
})
</script>

<template>
  <main>
    <ProjectFilterComp 
      @filter="changeFilter" 
      :disabled="isLoading"
    />
    
    <section class="projects" :class="{ 'is-loading': isLoading }">
      <div v-if="error" class="error-message">
        <box-icon name="error" size="2em" color="var(--error-color)"></box-icon>
        <p>{{ error }}</p>
        <button @click="retryLoading" class="retry-btn">
          Tentar Novamente
        </button>
      </div>
      
      <div v-else-if="isLoading" class="loading-state">
        <div class="loading-spinner"></div>
        <p>Carregando projetos...</p>
      </div>
      
      <div v-else-if="displayedItems.length === 0" class="no-results">
        <box-icon name="search" size="2em" color="var(--text-color-light)"></box-icon>
        <h3>Nenhum projeto encontrado</h3>
        <p>Tente ajustar os filtros de busca ou remover alguns filtros</p>
      </div>
      
      <template v-else>
        <div class="projects-grid">
          <ProjectsCard
            v-for="project of displayedItems"
            :key="project.id"
            :title="project.name"
            :description="project.about"
            :logo="project.logo"
            :image="project.images && project.images.length > 0 ? project.images[0] : ''"
            :type="project.type"
            :linkProject="project"
            :members="getProjectMembers(project)"
            :status="project.state"
          />
        </div>
        
        <PaginationButtons 
          v-if="pages > 1"
          :pages="pages" 
          :currentPage="currentPage" 
          @change-page="changePage"
        />
      </template>
    </section>
  </main>
</template>

<style scoped>
main {
  padding-top: var(--pn-main);
  min-height: 100vh;
  background-color: var(--bg-gray);
}

.projects {
  padding: 2rem var(--pn-main);
  min-height: 400px;
  position: relative;
}

.projects.is-loading {
  opacity: 0.7;
  pointer-events: none;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.loading-state,
.error-message,
.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  min-height: 400px;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--border-color);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-message {
  color: var(--error-color);
}

.error-message p {
  margin: 1rem 0;
  color: var(--text-color);
}

.retry-btn {
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-rd);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.retry-btn:hover {
  background-color: var(--primary-color-dark);
  transform: translateY(-2px);
}

.no-results {
  color: var(--text-color-light);
}

.no-results h3 {
  color: var(--text-color);
  margin: 1rem 0 0.5rem;
  font-size: 1.5rem;
}

.no-results p {
  color: var(--text-color-light);
  max-width: 400px;
}

@media screen and (max-width: 1024px) {
  .projects {
    padding: 1.5rem;
  }
  
  .projects-grid {
    gap: 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .projects {
    padding: 1rem;
  }
  
  .projects-grid {
    gap: 1rem;
  }
  
  .loading-state,
  .error-message,
  .no-results {
    padding: 2rem 1rem;
  }
}

@media screen and (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>