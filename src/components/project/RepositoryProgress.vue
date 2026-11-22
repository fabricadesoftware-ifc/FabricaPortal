<script setup lang="ts">
import { computed } from 'vue'
import AppIcon from '@/components/global/AppIcon.vue'
import { GITHUB_ORGANIZATION_URL } from '@/constants/projectDetails'
import type { RepositoryProgress } from '@/types/github'
import type { Repository } from '@/types/project'
import { formatDay } from '@/utils/formatDate'

const props = defineProps<{
  repository: Repository
  /** Undefined while loading or when GitHub is unavailable. */
  progress?: RepositoryProgress
}>()

const MAX_ISSUES = 4
const MAX_SEGMENTS = 10

const total = computed(() => props.progress?.issues.length ?? 0)
const closed = computed(() => props.progress?.closedCount ?? 0)
const issues = computed(() => props.progress?.issues.slice(0, MAX_ISSUES) ?? [])

const segments = computed(() => Math.min(total.value, MAX_SEGMENTS))
const filledSegments = computed(() => Math.round((closed.value / total.value) * segments.value))
</script>

<template>
  <div class="flex min-w-0 flex-col">
    <h3 class="type-h4 flex items-baseline justify-between gap-4">
      {{ repository.label }}
      <span v-if="total" class="type-label text-muted"
        ><span class="sr-only">Issues concluídas: </span>{{ closed }}/{{ total }}</span
      >
    </h3>

    <div v-if="total" class="mt-3 flex gap-1" aria-hidden="true">
      <span
        v-for="segment in segments"
        :key="segment"
        class="h-1 flex-1 rounded-full"
        :class="segment <= filledSegments ? 'bg-brand-orange' : 'bg-white/12'"
      />
    </div>

    <ul v-if="issues.length" class="mt-5 space-y-4">
      <li v-for="issue in issues" :key="issue.number" class="flex items-start gap-3">
        <span
          class="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border"
          :class="
            issue.closedAt ? 'border-brand-orange bg-brand-orange text-white' : 'border-white/25'
          "
          aria-hidden="true"
        >
          <AppIcon v-if="issue.closedAt" name="check" class="size-3" />
        </span>
        <div class="min-w-0">
          <p class="type-small break-words" :class="{ 'text-muted': !issue.closedAt }">
            <span v-if="issue.tag" class="type-label mr-1.5 text-subtle">{{ issue.tag }}</span>
            {{ issue.title }}
          </p>
          <p class="type-label" :class="issue.closedAt ? 'text-brand-teal' : 'text-subtle'">
            {{ issue.closedAt ? `Concluída ${formatDay(issue.closedAt)}` : 'Em aberto' }}
          </p>
        </div>
      </li>
    </ul>
    <p v-else-if="progress" class="type-small mt-4 text-muted">
      Este repositório não usa issues: o trabalho é acompanhado pelos pull requests.
    </p>

    <a
      :href="`${GITHUB_ORGANIZATION_URL}/${repository.name}`"
      target="_blank"
      rel="noopener"
      class="type-small mt-6 inline-flex max-w-full items-center gap-2 self-start rounded-lg border border-white/12 px-3.5 py-2 transition-colors hover:border-white/25 hover:bg-white/5"
    >
      <AppIcon name="github" class="size-4 shrink-0" />
      <span class="min-w-0 break-words">{{ repository.name }}</span>
      <span aria-hidden="true">↗</span>
    </a>
  </div>
</template>
