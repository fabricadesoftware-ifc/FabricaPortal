<template>
  <div class="card">
    <img :src="image" alt="" />
    <h3>{{ name }}</h3>
    <!--     <h4>{{ type }}</h4>
 -->
  </div>
</template>

<script setup>
defineProps({
  image: String,
  name: String,
  type: String
})
</script>

<style scoped>
.card {
  background-color: var(--background-color);
  width: 150px;
  height: 214px;
  display: flex;
  padding: 10px;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.card h3 {
  font-size: 18px;
  text-align: center;
}
.card h4 {
  font-size: 15px;
  text-align: center;
}
.card img {
  width: 100%;
  border-radius: 5px;
}
</style>
