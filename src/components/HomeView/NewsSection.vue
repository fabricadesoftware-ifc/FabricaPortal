<script setup>
import { ref, onMounted } from 'vue'
import ButtonAll from '../common/ButtonAll.vue'
import NewsCard from '../common/NewsCard.vue'

import NewsApi from '@/api/news'
const newsApi = new NewsApi()
const news = ref([])

onMounted(() => {
  news.value = newsApi.getNews
})
</script>

<template>
  <section>
    <h2>Notícias</h2>
    <div class="news-container">
      <div>
        <NewsCard
          v-for="newI of news"
          :key="newI.id"
          :title="newI.title"
          :data="newI.data"
          :user="newI.user"
          :background="newI.background"
        />
      </div>
      <ButtonAll link="/" text="Ver todas as notícias" />
    </div>
  </section>
</template>

<style scoped>

section .news-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
section div {
  display: flex;
}
</style>
