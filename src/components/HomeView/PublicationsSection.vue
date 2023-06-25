<script setup>
import ButtonMore from '../common/ButtonMore.vue'
const books = [
  {
    id: '1',
    title:
      'Chapter: Analyzing the Effectiveness of Self-Organized Public Key Management on MANETs under Lack of Cooperation and Impersonation attacks.',
    member: 'Eduardo da Silva, Michele N. Lima, Aldri L. dos Santos, Luiz C. P. Albini.',
    data: 'Springer, November 2009'
  }
]
const article = [
  {
    id: '1',
    title:
      'Chapter: Analyzing the Effectiveness of Self-Organized Public Key Management on MANETs under Lack of Cooperation and Impersonation attacks.',
    member: 'Eduardo da Silva, Michele N. Lima, Aldri L. dos Santos, Luiz C. P. Albini.',
    data: 'Springer, November 2009'
  }
]
const conference = [
  {
    id: '1',
    title:
      'Chapter: Analyzing the Effectiveness of Self-Organized Public Key Management on MANETs under Lack of Cooperation and Impersonation attacks.',
    member: 'Eduardo da Silva, Michele N. Lima, Aldri L. dos Santos, Luiz C. P. Albini.',
    data: 'Springer, November 2009'
  }
]

</script>

<template>
  <section>
    <h2>Publicações</h2>
    <div class="container">
      <div>
        <h3>Livros e capítulos de livros</h3>
        <ul v-for="(publication, li) in books" :key="li">
          <li>
            <span>
              {{ publication.title }} {{ publication.member }} {{ publication.data }}
            </span>
            <button-more link="/" text="ver mais" />
          </li>
        </ul>
      </div>
      <div>
        <h3>Artigos</h3>
        <ul v-for="(publication, li) in article" :key="li">
          <li>
            <span>
              {{ publication.title }} {{ publication.member }} {{ publication.data }}
            </span>
            <button-more link="/" text="ver mais" />
          </li>
        </ul>
      </div>
      <div>
        <h3>Conferências</h3>
        <ul v-for="(publication, li) in conference" :key="li">
          <li>
            <span>
              {{ publication.title }} {{ publication.member }} {{ publication.data }}
            </span>
            <button-more link="/" text="ver mais" />
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
ul li:hover p {
  font-weight: 500;
  cursor: pointer;
}
</style>
