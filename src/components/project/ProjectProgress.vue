<script setup lang="ts">
import { computed } from 'vue'
import type { RepositoryProgress as Progress } from '@/types/github'
import type { ProjectStatus, Repository } from '@/types/project'
import { formatDay } from '@/utils/formatDate'
import RepositoryProgress from './RepositoryProgress.vue'

const props = defineProps<{
  projectStatus: ProjectStatus
  status: 'loading' | 'ready' | 'failed'
  repositories: Repository[]
  /** In the order of the repositories. */
  progress: Progress[]
  issueCount: number
  closedCount: number
  mergedCount: number
  percentage: number | null
  lastActivity?: string
}>()

const readAt = formatDay(new Date().toISOString())

/** Open issues of a finished project are improvements, not what is left to deliver. */
const isInProgress = computed(() => props.projectStatus === 'active' && props.percentage !== null)
</script>

<template>
  <div class="rounded-3xl border border-white/8 bg-surface p-6 md:p-10">
    <div v-if="status === 'ready'" class="grid gap-6 border-b border-white/8 pb-8 sm:grid-cols-3">
      <p v-if="issueCount">
        <span class="type-h2 block" :class="{ 'text-brand-orange': isInProgress }">{{
          isInProgress ? `${percentage}%` : closedCount
        }}</span>
        <span class="type-small text-muted">{{
          isInProgress
            ? `${closedCount} de ${issueCount} issues concluídas`
            : `${closedCount === 1 ? 'issue concluída' : 'issues concluídas'}`
        }}</span>
      </p>
      <p>
        <span class="type-h3 block">{{ mergedCount }}</span>
        <span class="type-small text-muted">{{
          mergedCount === 1 ? 'pull request integrado' : 'pull requests integrados'
        }}</span>
      </p>
      <p v-if="lastActivity">
        <span class="type-h3 block">{{ formatDay(lastActivity) }}</span>
        <span class="type-small text-muted">última atividade</span>
      </p>
    </div>
    <p
      v-else
      class="type-body border-b border-white/8 pb-8 text-muted"
      :role="status === 'failed' ? 'status' : undefined"
    >
      {{
        status === 'loading'
          ? 'Consultando o GitHub…'
          : 'Não foi possível consultar o GitHub agora. Tente de novo mais tarde.'
      }}
    </p>

    <div class="grid gap-10 pt-8 xl:grid-cols-2 xl:gap-12">
      <RepositoryProgress
        v-for="(repository, index) in repositories"
        :key="repository.name"
        :repository="repository"
        :progress="progress[index]"
      />
    </div>

    <p v-if="status === 'ready'" class="type-small mt-8 border-t border-white/8 pt-6 text-subtle">
      Dados das issues e dos pull requests do GitHub, lidos em {{ readAt }}.
    </p>
  </div>
</template>
