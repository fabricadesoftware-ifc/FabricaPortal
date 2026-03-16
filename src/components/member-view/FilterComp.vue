<script setup lang="ts">
import { reactive } from 'vue'
import { useMembersStore } from '@/stores/members'

interface Props {
  members?: unknown[]
  occupations?: string[]
}

const props = defineProps<Props>()
const membersStore = useMembersStore()

const toSearch = reactive({
  filterName: '',
  selectedOccupation: 'Todos',
})

const search = () => {
  membersStore.searchMembers(toSearch.selectedOccupation, toSearch.filterName)
}
</script>

<template>
  <section class="bg-[var(--bg-white)] px-6 pb-12 pt-0 mx-0 md:mx-36 flex flex-col justify-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 uppercase tracking-wider">Membros</h2>

    <form @submit.prevent class="w-full flex flex-col">
      <div class="flex flex-col sm:flex-row w-full gap-4 items-stretch">
        <div
          class="flex-1 flex items-center bg-[var(--bg-gray)] rounded-lg shadow-sm overflow-hidden border border-transparent focus-within:border-[var(--primary-color)] transition-all"
        >
          <input
            type="text"
            placeholder="Nome do(a) membro"
            class="w-full p-3.5 text-base font-medium text-[var(--text-color)] bg-transparent outline-none"
            v-model="toSearch.filterName"
            @keyup.enter="search"
          />
        </div>

        <select
          v-model="toSearch.selectedOccupation"
          class="w-full sm:w-auto min-w-[200px] p-2.5 h-[52px] rounded-lg border-none bg-black/5 outline-none focus:ring-2 focus:ring-[var(--primary-color)]/50 transition-all cursor-pointer"
        >
          <option value="Todos">Todos</option>
          <option v-for="occupation in props.occupations" :key="occupation" :value="occupation">
            {{ occupation }}
          </option>
        </select>

        <div
          class="flex items-center justify-center bg-[var(--primary-color)] px-5 py-2.5 rounded-lg gap-2 cursor-pointer hover:opacity-90 transition-opacity"
          @click="search"
        >
          <span class="material-symbols-outlined text-white">search</span>
          <span class="hidden sm:inline text-white font-semibold text-sm uppercase">Buscar</span>
        </div>
      </div>
    </form>
  </section>
</template>
