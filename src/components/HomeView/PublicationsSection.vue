<script setup>
import { ref, onMounted } from 'vue'
import ButtonAll from '../common/ButtonAll.vue'
import PublicationComp from '../common/PublicationComp.vue'

import PublicationsApi from '@/api/publications'

const publicationsApi = new PublicationsApi()
const publications = ref([])
const filteredBooks = ref([])
const filteredArticles = ref([])
const filteredConferences = ref([])

onMounted(async () => {
  publications.value = publicationsApi.getPublications()
  filterPublications()
})

async function filterPublications() {
  const formats = publicationsApi.getFormats()

  const booksFormat = formats.find((format) => format.id === '1')
  const articlesFormat = formats.find((format) => format.id === '2')
  const conferencesFormat = formats.find((format) => format.id === '3')

  if (booksFormat) {
    filteredBooks.value = publicationsApi.getPublicationsByFormat(booksFormat.id)
  }

  if (articlesFormat) {
    filteredArticles.value = publicationsApi.getPublicationsByFormat(articlesFormat.id)
  }

  if (conferencesFormat) {
    filteredConferences.value = publicationsApi.getPublicationsByFormat(conferencesFormat.id)
  }
}
</script>

<template>
  <section>
    <h2>Publicações</h2>
    <div class="publications">
      <div class="container">
        <div class="publication-format">
          <h3>Livros e capítulos de livros</h3>
          <ul>
            <li v-for="publication in filteredBooks" :key="publication.id">
              <PublicationComp
                :title="publication.title"
                :data="publication.data"
                :members="publication.members"
              />
            </li>
          </ul>
        </div>
        <div class="publication-format">
          <h3>Artigos</h3>
          <ul>
            <li v-for="publication in filteredArticles" :key="publication.id">
              <PublicationComp
                :title="publication.title"
                :data="publication.data"
                :members="publication.members"
              />
            </li>
          </ul>
        </div>
        <div class="publication-format">
          <h3>Conferências</h3>
          <ul>
            <li v-for="publication in filteredConferences" :key="publication.id">
              <PublicationComp
                :title="publication.title"
                :data="publication.data"
                :members="publication.members"
              />>
            </li>
          </ul>
        </div>
      </div>
      <ButtonAll text="Ver todas as publicações" link="/" />
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--background-color-publications);
  margin: 80px 0 0 0;
  padding: 80px 145px;
  border-top: 5px solid var(--color-details-publications);
}

section .publications {
  display: flex;
  flex-direction: column;
  align-items: center;
}

section .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.container .publication-format {
  width: 47%;
  margin-bottom: 10px;
}

.container div h3 {
  color: var(--color-details-publications);
}

.container ul {
  list-style-type: disc;
  padding: 20px;
}

.container ul li {
  margin-bottom: 10px;
}

li .title {
  font-weight: 500;
  display: block;
}
</style>
