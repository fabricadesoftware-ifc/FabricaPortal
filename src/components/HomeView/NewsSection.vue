<script setup>
import { ref, onMounted } from 'vue'
import ButtonAll from '../common/ButtonAll.vue'
import NewsCard from '../common/NewsCard.vue'

import NewsApi from '@/api/news'
const newsApi = new NewsApi()
const news = ref([])

async function fetchNews() {
  news.value = newsApi.getNews()
}

onMounted(() => {
  fetchNews()
})

</script>

<template>
  <section>
    <h2>Notícias</h2>
    <div class="news-container">
      <div class="cards-news">
        <NewsCard
          v-for="newCard in news"
          :key="newCard.id"
          :title="newCard.title"
          :data="newCard.data"
          :user="newCard.user"
          :background="newCard.background"
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
section .cards-news {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
