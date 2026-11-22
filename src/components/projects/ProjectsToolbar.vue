<script setup lang="ts">
import FilterChip from '@/components/global/FilterChip.vue'
import SearchInput from '@/components/global/SearchInput.vue'
import { projectCategories } from '@/constants/portfolio'
import type { ProjectCategory, ProjectStatus } from '@/types/project'
import ProjectsFilters from './ProjectsFilters.vue'

const search = defineModel<string>('search', { required: true })
const category = defineModel<ProjectCategory | null>('category', { required: true })
const status = defineModel<ProjectStatus | null>('status', { required: true })
const technologies = defineModel<string[]>('technologies', { required: true })
</script>

<template>
  <!-- Small screens show the categories below the search. -->
  <div class="relative z-20 flex flex-wrap items-center gap-3 xl:flex-nowrap">
    <SearchInput v-model="search" label="Buscar projeto" class="flex-1 xl:max-w-72" />

    <div
      role="group"
      aria-label="Categorias"
      class="order-last flex basis-full flex-wrap gap-1 xl:order-none xl:mr-auto xl:basis-auto xl:flex-nowrap"
    >
      <FilterChip
        label="Todas"
        color="#fff"
        variant="plain"
        :is-active="category === null"
        @click="category = null"
      />
      <FilterChip
        v-for="({ color }, name) in projectCategories"
        :key="name"
        :label="name"
        :color="color"
        variant="plain"
        :is-active="category === name"
        @click="category = name"
      />
    </div>

    <ProjectsFilters v-model:status="status" v-model:technologies="technologies" />
  </div>
</template>
