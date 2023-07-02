<script setup>
import { ref, onMounted } from 'vue'
import ButtonMore from '../common/ButtonMore.vue'
import PublicationsApi from '@/api/publications'
const publicationsApi = new PublicationsApi()
const articles = ref([])
const books = ref([])
const conferences = ref([])

onMounted(() => {
  articles.value = publicationsApi.getArticles()
  conferences.value = publicationsApi.getConferences()
  books.value = publicationsApi.getBooks()
})
</script>

<template>
  <section>
    <h2>Publicações</h2>
    <div class="container">
      <div>
        <h3>Livros e capítulos de livros</h3>
        <ul v-for="(book, li) in books" :key="li">
          <li>
            <span class="title"> {{ book.title }} ({{ book.data }}) </span>
            <span>
              {{ book.member }}
            </span>
            <ButtonMore link="/" text="ver mais" />
          </li>
        </ul>
      </div>
      <div>
        <h3>Artigos</h3>
        <ul v-for="(article, li) in articles" :key="li">
          <li>
            <span class="title"> {{ article.title }} ({{ article.data }}) </span>
            <span>
              {{ article.member }}
            </span>
            <ButtonMore link="/" text="ver mais" />
          </li>
        </ul>
      </div>
      <div>
        <h3>Conferências</h3>
        <ul v-for="(conference, li) in conferences" :key="li">
          <li>
            <span class="title"> {{ conference.title }} ({{ conference.data }}) </span>
            <span>
              {{ conference.member }}
            </span>
            <ButtonMore link="/" text="ver mais" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--background-color);
  margin: 80px 0 0 0;
  padding: 80px 145px;
  border-top: 5px solid var(--primary-color);
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.container div {
  width: 47%;
  margin-bottom: 10px;
}

.container div h3 {
  color: var(--primary-color);
}

ul {
  list-style-type: disc;
  padding: 20px;
}

ul li {
  margin-bottom: 10px;
}

ul li .title {
  font-weight: 500;
  display: block;
}
</style>
