<script setup lang="ts">
import { computed } from 'vue'
import type { Notice } from '@/types/notice'
import { formatLongMonth } from '@/utils/formatDate'
import NoticeRow from './NoticeRow.vue'

const props = defineProps<{
  /** Most recent first. */
  notices: Notice[]
}>()

const months = computed(() => {
  const groups = new Map<string, Notice[]>()

  for (const notice of props.notices) {
    const month = formatLongMonth(notice.date)
    groups.set(month, [...(groups.get(month) ?? []), notice])
  }
  return groups
})
</script>

<template>
  <div>
    <section
      v-for="[month, monthNotices] in months"
      :key="month"
      class="group grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,5fr)] lg:gap-8"
    >
      <!-- Follows the scroll along the notices of the month. -->
      <h2 class="type-label self-start text-accent lg:sticky lg:top-32 lg:pt-11">{{ month }}</h2>
      <div class="border-white/8 group-last:border-b">
        <NoticeRow v-for="notice in monthNotices" :key="notice.id" :notice="notice" />
      </div>
    </section>
  </div>
</template>
