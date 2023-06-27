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
        <div>
          <img :src="image" alt="" />
        </div>
      </div>
    </router-link>
    <div class="container-details">
      <div class="status">
        <h5>{{ status }}</h5>
        <h5>{{ type }}</h5>
      </div>
      <h3>{{ title }}</h3>
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
  width: 32%;
  height: auto;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.card a {
  width: 100%;
  height: 40vh;
}

.card a .container-img {
  width: 100%;
  height: 40vh;
  margin-bottom: 5px;
  border-bottom: 5px solid var(--primary-color);
  background: url(src/assets/images/code.jpeg) no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card a .container-img div {
  width: 100%;
  height: 100%;
  background-color: #000000b4;
  transition: background-color .6s;

  display: flex;
  align-items: center;
  justify-content: center;
}

.card a .container-img img {
  width: auto;
  height: 125px;  
  transition: transform 0.6s;
  transform: scale(95%);
}

.card a:hover .container-img img {
  transform: scale(100%);
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

.card .container-details .status {
  display: flex;
}

.card .status h5 {
  margin-right: 10px;
  padding: 5px;
  background-color: var(--primary-color);
  color: var(--background-color);
}

</style>
