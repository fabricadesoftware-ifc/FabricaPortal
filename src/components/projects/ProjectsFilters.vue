<script setup lang="ts">
import { computed, ref, useId, useTemplateRef } from 'vue'
import AppIcon from '@/components/global/AppIcon.vue'
import FilterChip from '@/components/global/FilterChip.vue'
import { useClickOutside } from '@/composables/useClickOutside'
import { projectStatuses, technologyFilters } from '@/constants/portfolio'
import type { ProjectStatus } from '@/types/project'

const status = defineModel<ProjectStatus | null>('status', { required: true })
const technologies = defineModel<string[]>('technologies', { required: true })

const isOpen = ref(false)
const activeCount = computed(() => technologies.value.length + (status.value ? 1 : 0))
const panelId = useId()

const root = useTemplateRef('root')
const toggle = useTemplateRef('toggle')

useClickOutside(root, () => (isOpen.value = false))

function close() {
  if (!isOpen.value) return
  isOpen.value = false
  toggle.value?.focus()
}

function toggleTechnology(technology: string) {
  technologies.value = technologies.value.includes(technology)
    ? technologies.value.filter((name) => name !== technology)
    : [...technologies.value, technology]
}
</script>

<template>
  <div ref="root" class="xl:relative" @keydown.esc="close">
    <button
      ref="toggle"
      type="button"
      class="type-ui flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 transition-colors"
      :class="
        isOpen || activeCount
          ? 'border-brand-orange bg-brand-orange/15'
          : 'border-white/12 bg-surface hover:border-white/25'
      "
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      @click="isOpen = !isOpen"
    >
      <AppIcon name="sliders" class="size-4" />
      <!-- Narrow phones leave the room to the search. -->
      <span class="max-[24rem]:sr-only">Filtros</span>
      <span
        v-if="activeCount"
        class="grid size-5 place-items-center rounded-full bg-brand-orange type-label tracking-normal text-white"
        >{{ activeCount }}</span
      >
    </button>

    <Transition
      enter-active-class="transition duration-200 ease-out motion-reduce:transition-none"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-150 ease-in motion-reduce:transition-none"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        :id="panelId"
        role="group"
        aria-label="Filtros"
        class="absolute inset-x-0 top-full mt-3 rounded-lg border border-white/12 bg-surface p-5 shadow-2xl shadow-black/60 sm:left-auto sm:w-[calc(30rem*var(--type-scale,1))]"
      >
        <div class="flex items-center justify-between border-b border-white/8 pb-3">
          <p class="type-label text-muted">Filtros</p>
          <button
            type="button"
            aria-label="Fechar filtros"
            class="-m-2 grid size-9 cursor-pointer place-items-center rounded-lg text-muted transition-colors hover:text-white"
            @click="close"
          >
            <AppIcon name="close" class="size-4" />
          </button>
        </div>

        <div class="filter">
          <p class="type-label text-subtle">Status</p>
          <div role="group" aria-label="Status" class="flex flex-wrap gap-2">
            <FilterChip
              label="Todos"
              color="#fff"
              :is-active="status === null"
              @click="status = null"
            />
            <FilterChip
              v-for="({ label, color }, key) in projectStatuses"
              :key="key"
              :label="label"
              :color="color"
              :is-active="status === key"
              @click="status = key"
            />
          </div>
        </div>

        <div v-for="filter in technologyFilters" :key="filter.label" class="filter">
          <p class="type-label text-subtle">{{ filter.label }}</p>
          <div role="group" :aria-label="filter.label" class="flex flex-wrap gap-2">
            <FilterChip
              v-for="technology in filter.technologies"
              :key="technology"
              :label="technology"
              :is-active="technologies.includes(technology)"
              @click="toggleTechnology(technology)"
            />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.filter {
  display: grid;
  gap: 0.5rem 1rem;
  margin-top: 1rem;
}

@media (width >= 40rem) {
  .filter {
    grid-template-columns: calc(6.5rem * var(--type-scale, 1)) 1fr;
    align-items: center;
  }
}
</style>
