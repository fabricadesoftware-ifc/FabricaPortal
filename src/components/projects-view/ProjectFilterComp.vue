<script setup lang="ts">
import { ref } from 'vue'

interface FilterPayload {
  name: string
  status: string
}

const emit = defineEmits<{
  (e: 'filter', payload: FilterPayload): void
}>()

const filterProject = ref('')
const selectedStatus = ref('')

const statusOptions = [
  { id: 1, desc: 'Em Desenvolvimento', color: '#2196F3' },
  { id: 2, desc: 'Concluído', color: '#4CAF50' },
  { id: 3, desc: 'Cancelado', color: '#F44336' },
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
  <section
    class="bg-[var(--bg-white)] p-6 md:p-8 my-4 md:my-8 mx-4 sm:mx-8 md:mx-16 lg:mx-32 rounded-[var(--border-rd)] shadow-md hover:shadow-lg transition-all duration-300"
  >
    <h2 class="text-[var(--text-color)] mb-6 text-2xl md:text-3xl font-bold">Projetos</h2>

    <form @submit.prevent="search" class="w-full">
      <div class="flex flex-col gap-6">
        <div class="relative w-full group">
          <input
            type="text"
            placeholder="Buscar projeto por nome..."
            v-model="filterProject"
            @keyup.enter="search"
            class="w-full p-4 pl-12 rounded-[var(--border-rd)] text-base transition-all bg-[var(--bg-white)] outline-none bg-[var(--primary-color)]/10"
          />
          <span
            class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--primary-color)] transition-colors"
          >
            search
          </span>
        </div>

        <div class="grid grid-cols-1 gap-4">
          <div class="flex flex-col gap-2">
            <label class="font-medium text-[var(--text-color)] text-sm">Status do Projeto:</label>
            <select
              v-model="selectedStatus"
              @change="search"
              class="p-3 rounded-[var(--border-rd)] text-base bg-[var(--primary-color)]/10 cursor-pointer transition-all outline-none appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%23666\'%3E%3Cpath d=\'M7 10l5 5 5-5z\'/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0.8rem_center] bg-[length:1.5rem] pr-10"
            >
              <option value="">Todos os Status</option>
              <option
                v-for="status in statusOptions"
                :key="status.id"
                :value="status.desc"
                :style="{ borderLeft: `4px solid ${status.color}` }"
              >
                {{ status.desc }}
              </option>
            </select>
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-end items-center gap-4 mt-2">
          <button
            type="button"
            @click="clearFilters"
            :disabled="!filterProject && !selectedStatus"
            class="w-full md:w-auto flex items-center justify-center gap-2 px-5 py-3 border-2 border-[var(--border-color)] rounded-[var(--border-rd)] bg-white font-medium transition-all hover:bg-gray-100 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span class="material-symbols-outlined text-xl">close</span>
            Limpar Filtros
          </button>

          <button
            type="submit"
            class="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary-color)] text-white rounded-[var(--border-rd)] font-medium transition-all hover:brightness-110 hover:-translate-y-px active:translate-y-0"
          >
            <span class="material-symbols-outlined text-xl">search</span>
            <span>Buscar Projetos</span>
          </button>
        </div>
      </div>
    </form>
  </section>
</template>
