<script setup lang="ts">
import { onMounted } from 'vue'
import { ButtonAll, NewCardAll } from '@/components'
import { useNewsStore } from '@/stores/news'

const newsStore = useNewsStore()

onMounted(() => {
  newsStore.getNews()
})

/**
 * @param date
 */
const formatDate = (date: string | Date): string => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
</script>

<template>
  <section id="news" class="p-10 md:px-50">
    <h2 class="text-3xl font-bold mb-10">Notícias</h2>

    <div class="flex flex-col items-center gap-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <NewCardAll
          v-for="newCard in newsStore.state.news.slice(0, 3)"
          :key="newCard.id"
          :title="newCard.title"
          :data="formatDate(newCard.post_date)"
          :user="newCard.user"
          :background="newCard.images?.[0]?.file"
          :linkProject="newCard.id"
          :is-news="true"
        />
      </div>

      <div class="mt-4">
        <ButtonAll link="/all-news" text="Ver todas as notícias" />
      </div>
    </div>
  </section>
</template>
