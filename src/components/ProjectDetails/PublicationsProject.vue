<script setup>
import { defineProps } from 'vue'

defineProps({
  publications: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section id="publications">
    <h3>Publicações</h3>
    <div class="container">
      <ul>
        <li v-for="publicationId in publications" :key="publicationId.id">
          <RouterLink to="/">{{ publicationId.title }}</RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
ul {
  padding-left: 20px;
}
ul li {
  margin: 10px 0;
}
a {
  text-decoration: none;
  color: var(--text-color);
}
a:hover {
  text-decoration: underline;
}
.publications {
  display: flex;
  flex-direction: column;
}
</style>
