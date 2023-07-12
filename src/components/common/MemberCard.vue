<script setup>
import { ref } from 'vue';

defineProps({
  image: String,
  name: String,
  description: String,
  occupation: {
    type: Object,
  },
  linkMember: {
    type: Object,
  }
});

const encurtarNome = (name) => {
  if (name.length > 20) {
    const partesNome = nome.split(" ");
    const primeiroNome = partesNome[0];
    const ultimoNome = partesNome[partesNome.length - 1];
    const nomeEncurtado = primeiroNome[0] + ". " + ultimoNome;
    return nomeEncurtado;
  }
  return name;
};

const UrlMember = (id) => {
  return `/member/${id}`;
};

</script>

<template>
  <div class="card">
    <router-link :to="UrlMember(linkMember.id)">
      <div class="image" :style="{ backgroundImage: `url(${image})` }"><span></span></div>
      <div class="member-details">
        <h5>{{ occupation.description }}</h5>
        <h3>{{ name }}</h3>
        <p>
          {{ description }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<!-- Resto do código permanece igual -->

<style scoped>
.card {
  background-color: var(--white);
  width: 50%;
  height: 20vh;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  transition: transform 0.6s;
  transform: scale(97%);
}

.card a {
  color: var(--black);
  text-decoration: none;
  display: flex;
}

.card:hover {
  cursor: pointer;
  transform: scale(100%);
}

.card:hover .image {
  filter: brightness(1);
}
.card .image {
  width: 200px;
  height: 20vh;
  background-position: center;
  background-size: cover;
  transition: filter 0.6s;
  filter: brightness(0.6);
}

.card .member-details {
  border-left: 5px solid var(--primary-color);
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.card .member-details p{
  max-height: 3em; 
  overflow: hidden;
  text-overflow: ellipsis; 
}
h5 {
  color: #ff6700;
  text-transform: uppercase;
}
</style>
