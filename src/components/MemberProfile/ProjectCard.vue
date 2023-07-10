<script setup>
// import { computed } from 'vue'
// import ButtonMore from '../common/ButtonMore.vue'

defineProps({
  description: String,
  title: String,
  image: String,
  status: String,
  type: String,
  style: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="card">
    <router-link to="/">
      <div class="container-img">
        <img :src="image" alt="" />
      </div>
    </router-link>
    <div class="container-details">
      <div>
        <h3>{{ title }}</h3>
        <div class="status">
          <h5>{{ status }}</h5>
          <h5>{{ type }}</h5>
        </div>
      </div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
h3,
p {
  margin: 3px 0;
}

.card {
  width: 100%;
  margin: 10px 0;
  height: auto;
  display: flex;
  border: 5px solid var(--background-color);
}

.card a .container-img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card a .container-img img {
  width: auto;
  height: 125px;
}

.card a:hover .container-img div {
  background-color: #00000081;
}

.card .container-details h3::first-letter {
  text-decoration: underline;
  text-decoration-color: var(--primary-color);
}

.card .container-details {
  width: 100%;
  padding: 15px;
}

.card .container-details div {
  display:flex;
  justify-content: space-between;
}
.card .container-details p {
  max-height: 3em; /* Altura máxima de 3 linhas */
  overflow: hidden;
  text-overflow: ellipsis; /* Exibir reticências para o conteúdo que excede a altura máxima */

}

.card .container-details .status {
  display: flex;
  align-items: center;
}

.card .status h5 {
  padding: 5px;
  background-color: var(--primary-color);
  color: var(--background-color);
  margin-left: 5px;
}
</style>