<script setup lang="ts">
import BaseBreadcrumb from '@/components/global/BaseBreadcrumb.vue'
import BaseButton from '@/components/global/BaseButton.vue'
import BaseTag from '@/components/global/BaseTag.vue'
import type { PortfolioProject, ProjectLink } from '@/types/project'

defineProps<{ project: PortfolioProject; links?: ProjectLink[] }>()

const MAX_TECHNOLOGIES = 3

const breadcrumb = [
  { label: 'Início', to: '/' },
  { label: 'Projetos', to: '/projects' },
]
</script>

<template>
  <header class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
    <div>
      <BaseBreadcrumb :links="breadcrumb" :current="project.name" />
      <h1 class="type-h2 mt-4">{{ project.name }}</h1>
      <ul class="mt-5 flex flex-wrap gap-2" aria-label="Categoria e tecnologias">
        <li v-if="project.category">
          <BaseTag class="border-(--color)! bg-(--color)/15">{{ project.category }}</BaseTag>
        </li>
        <li v-for="technology in project.technologies.slice(0, MAX_TECHNOLOGIES)" :key="technology">
          <BaseTag>{{ technology }}</BaseTag>
        </li>
      </ul>
    </div>

    <div
      v-if="project.href || links?.length"
      class="flex shrink-0 flex-wrap gap-3 max-md:self-start"
    >
      <BaseButton v-for="link in links" :key="link.href" :href="link.href" variant="outline">
        {{ link.label }}
      </BaseButton>
      <BaseButton v-if="project.href" :href="project.href" variant="primary">
        Acessar projeto
      </BaseButton>
    </div>
  </header>
</template>
