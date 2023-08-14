<script setup>
import NewsCard from '@/components/ProjectDetails/NewsCard.vue'
import { defineProps } from 'vue'
defineProps({
    news: {
    type: Array,
    default: () => []
  }
})


</script>

<template>
    <section>
        <h3>Notícias</h3>
        <div class="news">
            <NewsCard v-for="newCard in news" :key="newCard.id" :title="newCard.title" :data="newCard.data"
                :user="newCard.user" :background="newCard.background" />
        </div>
    </section>
</template>

<style scoped>
section .news {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
