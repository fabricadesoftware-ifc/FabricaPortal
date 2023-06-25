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
      <div class="container-img">
        <img :src="image" alt="" />
      </div>
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
  width: 49%;
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

.card .container-img {
  border-right: 5px solid var(--primary-color);
  display: flex;
  align-items: center;
}

.card:hover .container-img img {
  filter: brightness(1);
}
.card .container-img img {
  width: auto;
  height: 125px;
  transition: filter 0.6s;
  filter: brightness(0.6);
}


.card .member-details {
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
