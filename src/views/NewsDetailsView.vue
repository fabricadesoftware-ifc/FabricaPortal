<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { NewsHeader, DescriptionNews, CarouselComp } from '@/components'
import { useNewsStore } from '@/stores/news'
import { useLoadingStore } from '@/stores/loading'

const route = useRoute()
const newsStore = useNewsStore()
const loadingStore = useLoadingStore()

const newsId = route.params.id as string

onMounted(async () => {
  loadingStore.startLoading()
  await newsStore.getNewById(newsId)
  loadingStore.stopLoading()
})

const formatDate = (date: string | Date | undefined): string => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
</script>

<template>
  <main
    v-if="newsStore.state.selectedNew"
    class="flex flex-col gap-8 w-full pt-[var(--pn-main)] px-4 sm:px-8 md:px-24 lg:px-40 xl:px-[19em]"
  >
    <section class="w-full">
      <NewsHeader :title="newsStore.state.selectedNew?.title" />
    </section>

    <section class="w-full">
      <CarouselComp :images="newsStore.state.selectedNew?.images" />
    </section>

    <section class="w-full">
      <DescriptionNews
        :description="newsStore.state.selectedNew?.description"
        :published="formatDate(newsStore.state.selectedNew?.post_date)"
        :title="newsStore.state.selectedNew?.title"
      />
    </section>
  </main>
</template>
