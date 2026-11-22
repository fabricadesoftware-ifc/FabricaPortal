<script setup lang="ts">
import { nextTick, useTemplateRef, watch } from 'vue'
import { definePage } from 'vue-router/experimental'
import BasePagination from '@/components/global/BasePagination.vue'
import EmptyResults from '@/components/global/EmptyResults.vue'
import PageHeading from '@/components/global/PageHeading.vue'
import NoticesList from '@/components/notices/NoticesList.vue'
import NoticesToolbar from '@/components/notices/NoticesToolbar.vue'
import { useNoticeFilters } from '@/composables/useNoticeFilters'
import { useNotices } from '@/composables/useNotices'
import { usePageTitle } from '@/composables/usePageTitle'
import { usePagination } from '@/composables/usePagination'

definePage({ name: 'notices', path: '/notices' })

usePageTitle('Notícias')

const PAGE_SIZE = 6

const { notices, isLoading } = useNotices()
const { search, category, matches, clear } = useNoticeFilters(notices)
const { page, pageCount, pageItems } = usePagination(matches, PAGE_SIZE)

const list = useTemplateRef('list')

// The buttons are at the end of the list. Filters also change the page, but from the top.
watch(page, async () => {
  await nextTick()
  if (list.value && list.value.getBoundingClientRect().top < 0) list.value.scrollIntoView()
})
</script>

<template>
  <main class="section pt-32 md:pt-40">
    <div
      class="flex flex-col gap-8 border-b border-white/8 pb-10 2xl:flex-row 2xl:items-end 2xl:justify-between"
    >
      <PageHeading
        class="shrink-0"
        description="Avisos, resultados e o que está acontecendo na Fábrica."
      >
        Últimas <span class="text-brand-orange">notícias</span>
      </PageHeading>
      <NoticesToolbar v-model:search="search" v-model:category="category" :notices="notices" />
    </div>

    <!-- The minimum height keeps the footer from jumping while the notices load. -->
    <div ref="list" class="min-h-120 scroll-mt-28 pt-8">
      <template v-if="matches.length">
        <p class="type-label text-muted" role="status">
          {{ matches.length }} {{ matches.length === 1 ? 'notícia' : 'notícias' }}
        </p>
        <NoticesList :notices="pageItems" class="mt-8" />
        <BasePagination v-if="pageCount > 1" v-model="page" :page-count="pageCount" class="mt-12" />
      </template>
      <EmptyResults v-else-if="!isLoading" title="Nenhuma notícia encontrada" @clear="clear" />
    </div>
  </main>
</template>
