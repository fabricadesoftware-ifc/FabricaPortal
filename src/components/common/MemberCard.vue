<script setup>
defineProps({
  image: String,
  name: String,
  description: String,
  type: String
})
</script>

<template>
  <div class="card">
    <router-link to="/">
      <img :src="image" alt="" />

      <div class="member-details">
        <h5>{{ type }}</h5>
        <h3>{{ name }}</h3>
        <p>
          {{ description }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--background-color);
  width: 50%;
  height: auto;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  transition: transform 0.6s;
  transform: scale(97%);
}

.card a {
  text-decoration: none;
  display: flex;
}

.card:hover {
  cursor: pointer;
  transform: scale(100%);
}

.card:hover img {
  filter: brightness(1);
}
.card img {
  width: 25%;
  height: auto;
  transition: filter 0.6s;
  filter: brightness(0.6);
}


.card .member-details {
  border-left: 5px solid var(--primary-color);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

h5 {
  color: #ff6700;
  text-transform: uppercase;
}
</style>
