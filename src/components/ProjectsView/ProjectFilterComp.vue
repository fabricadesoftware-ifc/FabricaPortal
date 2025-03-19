<script setup>
import { ref } from 'vue'

const emit = defineEmits(['filter'])

const filterProject = ref('')
const selectedStatus = ref('')

const statusOptions = [
  { id: 1, desc: 'Em Desenvolvimento', color: '#2196F3' },
  { id: 2, desc: 'Concluído', color: '#4CAF50' },
  { id: 3, desc: 'Cancelado', color: '#F44336' }
]

const search = () => {
  emit('filter', {
    name: filterProject.value,
    status: selectedStatus.value,
  })
}

const clearFilters = () => {
  filterProject.value = ''
  selectedStatus.value = ''
  search()
}
</script>

<template>
  <section>
    <h2>Projetos</h2>
    <form @submit.prevent="search">
      <div class="filter-container">
        <div class="search-container" id="search">
          <input 
            type="text" 
            name="project" 
            id="input-search" 
            placeholder="Buscar projeto por nome..."
            autocomplete="off" 
            v-model="filterProject" 
            @keyup.enter="search" 
          />
          <div class="search-icon"></div>
        </div>
        
        <div class="filters">
          <div class="filter-group">
            <label>Status do Projeto:</label>
            <select v-model="selectedStatus" @change="search">
              <option value="">Todos os Status</option>
              <option v-for="status in statusOptions" 
                      :key="status.id" 
                      :value="status.desc"
                      :style="{ borderLeft: `4px solid ${status.color}` }"
              >
                {{ status.desc }}
              </option>
            </select>
          </div>
        </div>

        <div class="filter-actions">
          <button type="button" class="clear-btn" @click="clearFilters" :disabled="!filterProject && !selectedStatus">
            <box-icon name="x" size="1.2em" color="var(--text-color)"></box-icon>
            Limpar Filtros
          </button>
          <button type="submit" class="search-btn">
            <box-icon name="search-alt" size="1.5em" color="var(--white)"></box-icon>
            <span>Buscar Projetos</span>
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style scoped>
section {
  background-color: var(--bg-white);
  padding: 2rem;
  margin: 2rem 8rem;
  border-radius: var(--border-rd);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

section:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

h2 {
  color: var(--text-color);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

form {
  width: 100%;
}

.filter-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.search-container {
  width: 100%;
  position: relative;
}

.search-container input {
  width: 100%;
  padding: 1rem;
  padding-left: 3rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-rd);
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: var(--bg-white);
}

.search-container input:hover {
  border-color: var(--primary-color);
}

.search-container input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.1);
  outline: none;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.2rem;
  height: 1.2rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23666'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.search-container input:focus + .search-icon {
  opacity: 1;
}

.filters {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-group label {
  font-weight: 500;
  color: var(--text-color);
  font-size: 0.9rem;
}

.filter-group select {
  padding: 0.8rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-rd);
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23666'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  background-size: 1.5rem;
  padding-right: 2.5rem;
}

.filter-group select:hover {
  border-color: var(--primary-color);
}

.filter-group select:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb), 0.1);
  outline: none;
}

.filter-group option {
  padding: 0.8rem;
  font-size: 1rem;
}

.filter-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.clear-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-rd);
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.clear-btn:hover:not(:disabled) {
  background-color: var(--bg-gray);
  border-color: var(--text-color);
}

.clear-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.search-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  border: none;
  border-radius: var(--border-rd);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.search-btn:hover {
  background-color: var(--primary-color-dark);
  transform: translateY(-1px);
}

.search-btn:active {
  transform: translateY(0);
}

@media screen and (max-width: 1200px) {
  section {
    margin: 2rem 4rem;
  }
}

@media screen and (max-width: 1024px) {
  section {
    margin: 1.5rem 2rem;
  }
}

@media screen and (max-width: 768px) {
  section {
    margin: 1rem;
    padding: 1.5rem;
  }

  .filter-actions {
    flex-direction: column;
    gap: 1rem;
  }

  .clear-btn, .search-btn {
    width: 100%;
    justify-content: center;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}

@media screen and (max-width: 480px) {
  section {
    padding: 1rem;
    margin: 0.5rem;
  }

  .search-container input,
  .filter-group select {
    font-size: 0.9rem;
  }
}
</style>
