<script setup>
import { onMounted } from 'vue'
import NewCardAll from '@/components/common/NewCardAll.vue'
import { useNewsStore } from '@/stores'

const newsStore = useNewsStore()

onMounted(async() => {
  await newsStore.getNews()
})

const formatDate = (date) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(date).toLocaleDateString('pt-BR', options);
}
</script>

<template>
  <main id="news">
    <h2>Notícias</h2>
    <div class="container">
      <div class="news">
        <NewCardAll
          v-for="newCard in newsStore.state.news"
          :key="newCard.id"
          :title="newCard?.title"
          :data="formatDate(newCard.post_date)"
          :user="newCard.user"
          :background="newCard.images[0].file"
          :linkProject="newCard.id"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
}
.news {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  flex-wrap: wrap;
  padding: 0 20px;
  justify-content: center;
}
@media only screen and (max-width: 600px) {
  .card {
    flex-direction: column;
  }
  .card .details {
    border-top: var(--border) solid var(--members);
    padding: 15px;
    gap: 9px;
    height: inherit;
    justify-content: center;
    align-items: flex-start;
  }
}
@media only screen and (max-width: 1024px) {
  .news {
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }
}

main {
  padding: 100px 0px;
  background-color: var(--bg-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>
