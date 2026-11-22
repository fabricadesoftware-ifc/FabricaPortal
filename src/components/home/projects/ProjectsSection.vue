<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import BaseButton from '@/components/global/BaseButton.vue'
import BaseTabs from '@/components/global/BaseTabs.vue'
import SectionHeading from '@/components/global/SectionHeading.vue'
import { useProjectTeams } from '@/composables/useProjectTeams'
import { featuredProjects } from '@/constants/featuredProjects'
import ProjectCard from './ProjectCard.vue'
import ProjectPreview from './ProjectPreview.vue'
import ProjectTeamCard from './ProjectTeamCard.vue'

const categories = featuredProjects.map(({ category }) => category)

const active = ref(0)
const project = computed(() => featuredProjects[active.value]!)
const teams = useProjectTeams()
const panelId = useId()
</script>

<template>
  <section class="section">
    <!-- Small screens show the button after the projects. -->
    <header class="flex items-end justify-between gap-6">
      <SectionHeading eyebrow="Projetos">
        Software de verdade,
        <span class="block text-brand-orange">feito por alunos</span>
      </SectionHeading>
      <BaseButton to="/projects" variant="outline" class="shrink-0 max-lg:hidden">
        Ver todos os projetos
      </BaseButton>
    </header>

    <BaseTabs
      v-model="active"
      :tabs="categories"
      label="Categorias de projetos"
      :panel-id="panelId"
      class="mx-auto mt-12"
    />

    <div :id="panelId" role="tabpanel" :aria-label="project.category" class="mt-10">
      <Transition
        mode="out-in"
        enter-active-class="transition duration-250 ease-out motion-reduce:transition-none"
        enter-from-class="translate-y-2 opacity-0"
        leave-active-class="transition duration-150 ease-in motion-reduce:transition-none"
        leave-to-class="opacity-0"
      >
        <div
          :key="project.id"
          class="grid gap-5 xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:grid-rows-[auto_1fr]"
        >
          <ProjectCard :project="project" :position="active + 1" class="xl:row-span-2" />
          <ProjectPreview :project="project" />
          <ProjectTeamCard :team="teams[project.id]" />
        </div>
      </Transition>
    </div>

    <BaseButton to="/projects" variant="outline" class="mt-8 lg:hidden">
      Ver todos os projetos
    </BaseButton>
  </section>
</template>
