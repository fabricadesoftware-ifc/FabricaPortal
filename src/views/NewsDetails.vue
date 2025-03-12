<script setup>
import { ref, onMounted } from 'vue'
import NewsHeader from '@/components/NewsDetails/NewsHeader.vue';
import CarouselComp from '@/components/ProjectDetails/CarouselComp.vue'
import DescriptionNews from '@/components/NewsDetails/DescripitionNews.vue';
import { useNewsStore } from '@/stores'
import router from '@/router';

const newsStore = useNewsStore()
const imagesNew = ref([])

onMounted(async () => {
  await newsStore.getNewById(router.currentRoute.value.params.id)
  for (const i of newsStore.state.selectedNew.images) {
    imagesNew.value.push(i.file)
  }
})

const formatDate = (date) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(date).toLocaleDateString('pt-BR', options);
}

</script>

<template>
  <main v-if="newsStore.state.news.length > 0">
    <NewsHeader :title="newsStore.state.selectedNew?.title" />
    <CarouselComp :images="newsStore.state.selectedNew?.images" />
    <DescriptionNews :description="newsStore.state.selectedNew?.description" :published="formatDate(newsStore.state.selectedNew?.post_date)"
     :title="newsStore.state.selectedNew?.title" />
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
