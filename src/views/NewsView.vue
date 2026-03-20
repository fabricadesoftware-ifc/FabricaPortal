<script setup lang="ts">
import { onMounted } from 'vue'
import { NewCardAll } from '@/components'
import { useNewsStore } from '@/stores/news'
import { useLoadingStore } from '@/stores/loading'

const newsStore = useNewsStore()
const loadingStore = useLoadingStore()

onMounted(async () => {
  loadingStore.startLoading()
  await newsStore.getNews()
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
  <main id="news" class="flex flex-col items-center pt-40 bg-[var(--bg-gray)] min-h-screen">
    <h2 class="text-3xl font-bold text-gray-800 mb-12">Notícias</h2>

    <div class="w-[90%] md:w-[80%] lg:w-[60%] mx-auto flex flex-col items-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full px-5">
        <NewCardAll
          v-for="newCard in newsStore.state.news"
          :key="newCard.id"
          :title="newCard?.title"
          :data="formatDate(newCard.post_date)"
          :user="newCard.user"
          :background="newCard.images?.[0]?.file"
          :linkProject="newCard.id"
          :is-news="true"
        />
      </div>

      <div v-if="newsStore.state.news.length === 0" class="mt-10 text-gray-500 italic">
        Nenhuma notícia publicada no momento.
      </div>
    </div>
  </main>
</template>
