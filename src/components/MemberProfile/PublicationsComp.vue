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
    <div class="publications">
      <h3>Publicações</h3>
      <div class="container">
        <div>
          <h4>Livros e capítulos de livros</h4>
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
          <h4>Artigos</h4>
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
          <h4>Conferências</h4>
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
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--white);
  margin: 10px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
section .container {
    margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.container div {
  width: 47%;
  margin-bottom: 5px;
}

.container div h3 {
  color: var(--primary-color);
}

.container ul {
  list-style-type: disc;
  padding: 10px;
}

.container ul li {
  margin-bottom: 10px;
}

li .title {
  font-weight: 500;
  display: block;
}
</style>