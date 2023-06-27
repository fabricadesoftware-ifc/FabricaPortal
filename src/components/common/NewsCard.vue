<script setup>
// import { computed } from 'vue'
// import ButtonMore from './ButtonMore.vue'

defineProps({
  title: String,
  data: String,
  user: String,
  background: String, 
})

// const computedBackgroundStyle = computed(() => {
//   return {
//     backgroundImage: `url(${background})`
//   };
// });
</script>

<template>
  <div class="card">
    <div class="image" :style="{ backgroundImage: `url(${background})` }">
      <router-link to="/">
        <div class="container-details">
          <div>
            <h3>{{ title }}</h3>
            <h5>{{ data }} ● @{{ user }}</h5>
          </div>
        </div>
      </router-link>
      </div>
  </div>
</template>

<style scoped>
.card {
  width: auto;
  height: 40vh;
  margin-right: 20px;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  flex-direction: column;
}

.card .image {
  width: 100%;
  height: 100%;
  border-bottom: 5px solid var(--primary-color);
  background-position: center;
  background-size: cover;
}

.card .image a {
  text-decoration: none;
}

.card .container-details {
  background-color: #000000b4;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: background-color .6s;
}

.card .container-details:hover {
  background-color: #00000081;
}

.card .container-details div {
  padding: 14px;
}

.card h3,
h5 {
  color: var(--white);
}
</style>
