<script setup>
import { ref, onMounted} from 'vue'
import NewsHeader from '@/components/NewsDetails/NewsHeader.vue';
import CarouselComp from '@/components/ProjectDetails/CarouselComp.vue'
import DescriptionNews from '@/components/NewsDetails/DescripitionNews.vue';
import NewsApi from '@/api/news'

const newsApi = new NewsApi()

const newsId = ref(null)
const news = ref(false)

onMounted(async () => {
  const path = window.location.pathname
  const newsIdFromUrl = path.substring(path.lastIndexOf('/') + 1)
  newsId.value = newsIdFromUrl
  news.value = newsApi.getNewsById(newsId.value)
})

</script>

<template>
  <main v-if="news">
    <NewsHeader :title="news.title" />
    <CarouselComp :images="news.images" />
<DescriptionNews :description="news.description" :logo="news.logo" :tags="news.tags" :published="news.published" :status="news.status" :updated="news.updated" :title="news.title" />
  </main>
</template>

<style scoped>
main {
  padding: var(--pn-main) 19em;
  display: flex;
  gap: 33px;
  flex-direction: column;
}

main section {
  width: 100%;
}
@media only screen and (max-width: 1224px) {
  main {
    padding: var(--pn-main) 10em;
  }
}
@media only screen and (max-width: 768px) {
  main {
    padding: var(--pn-main) 6em;
  }
}
@media only screen and (max-width: 600px) {
  main {
    padding: var(--pn-main) 2em;
  }

}
@media only screen and (max-width: 375px) {
  main {
    padding: var(--pn-main) 1em;
  }
}
</style>
