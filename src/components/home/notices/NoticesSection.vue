<script setup lang="ts">
import SplitSection from '@/components/global/SplitSection.vue'
import { useLatestNotices } from '@/composables/useLatestNotices'
import NoticeItem from './NoticeItem.vue'

const notices = useLatestNotices()
</script>

<template>
  <SplitSection
    eyebrow="Notícias"
    description="Avisos, resultados e o que está acontecendo na Fábrica de Software."
    to="/notices"
    action="Todas as notícias"
  >
    <template #title>Últimas <span class="text-brand-orange">novidades</span></template>

    <ol>
      <NoticeItem
        v-for="(notice, index) in notices"
        :key="notice.title"
        :notice="notice"
        :is-featured="index === 0"
      />
    </ol>
  </SplitSection>
</template>
