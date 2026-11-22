<script setup lang="ts">
import { computed } from 'vue'
import BaseBreadcrumb from '@/components/global/BaseBreadcrumb.vue'
import LinkRows from '@/components/global/LinkRows.vue'
import { useNoticeText } from '@/composables/useNoticeText'
import { noticeCategories } from '@/constants/notices'
import type { Notice } from '@/types/notice'
import { formatLongDate, formatShortMonth } from '@/utils/formatDate'
import NoticeText from './NoticeText.vue'

const props = defineProps<{
  notice: Notice
  others: Notice[]
}>()

const links = [
  { label: 'Início', to: '/' },
  { label: 'Notícias', to: '/notices' },
]

const { text, readingTime } = useNoticeText(props.notice.id)

const color = computed(() =>
  props.notice.category ? noticeCategories[props.notice.category].color : undefined,
)

const otherRows = computed(() =>
  props.others.map(({ id, title, date }) => ({
    label: title,
    to: `/notices/${id}`,
    tag: formatShortMonth(date),
    color: 'var(--color-subtle)',
  })),
)
</script>

<template>
  <main class="section pt-32 md:pt-40">
    <article>
      <header class="border-b border-white/8 pb-10">
        <BaseBreadcrumb :links="links" :current="formatShortMonth(notice.date)" />
        <p class="type-label mt-8 flex flex-wrap gap-x-5 gap-y-1">
          <span v-if="notice.category" :style="{ color }">{{ notice.category }}</span>
          <time :datetime="notice.date" class="text-muted">{{ formatLongDate(notice.date) }}</time>
          <span v-if="text" class="text-subtle">{{ readingTime }} min de leitura</span>
        </p>
        <h1 class="type-h2 mt-4 max-w-4xl">{{ notice.title }}</h1>
        <p v-if="notice.summary" class="type-body mt-5 max-w-3xl text-muted">
          {{ notice.summary }}
        </p>
      </header>

      <!-- The minimum height keeps the rest from jumping while the text loads. -->
      <div class="min-h-40 pt-10">
        <NoticeText v-if="text" :text="text" class="max-w-3xl" />
      </div>
    </article>

    <LinkRows
      v-if="others.length"
      title="Outras notícias"
      :rows="otherRows"
      class="mt-16 md:mt-24"
    />
  </main>
</template>
