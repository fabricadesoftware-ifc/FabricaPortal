<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BaseTag from '@/components/global/BaseTag.vue'
import { memberRoles } from '@/constants/members'
import type { Member } from '@/types/member'
import type { PortfolioProject } from '@/types/project'
import { slugify } from '@/utils/slugify'

defineProps<{
  /** Students of the projects, with the projects of each one. */
  students: { student: Member; projects: PortfolioProject[] }[]
  projectCount: number
}>()
</script>

<template>
  <div class="rounded-3xl border border-white/8 bg-surface p-6 md:p-10">
    <div class="grid gap-6 sm:grid-cols-3">
      <p>
        <span class="type-h2 block text-(--color)">{{ students.length }}</span>
        <span class="type-small text-muted">{{
          students.length === 1 ? 'discente nos projetos' : 'discentes nos projetos'
        }}</span>
      </p>
      <p>
        <span class="type-h3 block">{{ projectCount }}</span>
        <span class="type-small text-muted">{{ projectCount === 1 ? 'projeto' : 'projetos' }}</span>
      </p>
    </div>

    <ul class="mt-8 border-b border-white/8">
      <li v-for="{ student, projects } in students" :key="student.name">
        <RouterLink
          :to="`/members/${slugify(student.name)}`"
          class="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-1 border-t border-white/8 py-3.5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto_auto]"
        >
          <span class="type-small font-medium transition-colors group-hover:text-accent">{{
            student.name
          }}</span>
          <span class="type-small text-subtle max-md:col-start-1">{{
            projects.map(({ name }) => name).join(', ')
          }}</span>
          <BaseTag class="max-md:hidden" :style="{ borderColor: memberRoles.student.color }">{{
            memberRoles.student.singular
          }}</BaseTag>
          <span class="type-small text-muted max-md:col-start-2 max-md:row-start-1"
            >Ver perfil <span aria-hidden="true">→</span></span
          >
        </RouterLink>
      </li>
    </ul>

    <p class="type-small mt-6 text-subtle">
      Discentes ativos dos projetos de que participa. A atividade de cada um fica no próprio perfil.
    </p>
  </div>
</template>
