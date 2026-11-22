<script setup lang="ts">
import type { MemberActivity } from '@/types/github'
import { formatDay } from '@/utils/formatDate'

defineProps<{
  /** Undefined while loading or when GitHub is unavailable. */
  activity?: MemberActivity
  hasFailed: boolean
}>()
</script>

<template>
  <div class="rounded-3xl border border-white/8 bg-surface p-6 md:p-10">
    <template v-if="activity">
      <div class="grid gap-6 sm:grid-cols-3">
        <p>
          <span class="type-h2 block text-(--color)">{{ activity.commitCount }}</span>
          <span class="type-small text-muted">{{
            activity.commitCount === 1 ? 'commit na organização' : 'commits na organização'
          }}</span>
        </p>
        <p>
          <span class="type-h3 block">{{ activity.pullRequestCount }}</span>
          <span class="type-small text-muted">{{
            activity.pullRequestCount === 1 ? 'pull request' : 'pull requests'
          }}</span>
        </p>
        <p v-if="activity.lastActivity">
          <span class="type-h3 block">{{ formatDay(activity.lastActivity) }}</span>
          <span class="type-small text-muted">última atividade</span>
        </p>
      </div>

      <template v-if="activity.pullRequests.length">
        <h3 class="type-label mt-8 text-subtle">Pull requests recentes</h3>
        <ul class="mt-3 border-b border-white/8">
          <li v-for="item in activity.pullRequests" :key="item.href">
            <a
              :href="item.href"
              target="_blank"
              rel="noopener"
              class="group grid grid-cols-[minmax(0,1fr)] gap-x-6 gap-y-1 border-t border-white/8 py-3.5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] xl:items-baseline"
            >
              <span class="type-label flex gap-2 tracking-normal text-subtle normal-case">
                <span class="min-w-0 break-words">{{ item.repository }}</span>
                <span class="text-(--color)">#{{ item.number }}</span>
              </span>
              <span class="type-small break-words transition-colors group-hover:text-accent">{{
                item.title
              }}</span>
              <time :datetime="item.createdAt" class="type-label text-subtle">{{
                formatDay(item.createdAt)
              }}</time>
            </a>
          </li>
        </ul>
      </template>

      <p class="type-small mt-6 text-subtle">
        Dados públicos do GitHub, contados na organização fabricadesoftware-ifc.
      </p>
    </template>

    <p v-else class="type-body text-muted" role="status">
      {{
        hasFailed
          ? 'Não foi possível consultar o GitHub agora. Tente de novo mais tarde.'
          : 'Consultando o GitHub…'
      }}
    </p>
  </div>
</template>
