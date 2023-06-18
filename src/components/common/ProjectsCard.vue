<template>
  <div class="card">
    <div class="container-img">
      <img :src="image" alt="" />
    </div>
    <div class="project-details">
      <h3>{{ title }}</h3>
      <p>
        {{ description }}
      </p>
      <div class="project-langs">
        <div v-for="(lang, i) in langs" :key="i">
          <box-icon color="#fff" type="logo" size="20px" :name="lang.icon"></box-icon>
          <span>{{ lang.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  description: String,
  title: String,
  image: String
})
const langs = [
  {
    icon: 'css3',
    name: 'css'
  },
  {
    icon: 'vuejs',
    name: 'vue.js'
  },
  {
    icon: 'typescript',
    name: 'typescript'
  }
]
</script>

<style scoped>
.card {
  background-color: var(--background-color);
  width: 47.5%;
  height: 125px;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  align-content: space-around;
}
.card .container-img img {
  width: auto;
  margin-right: 7px;
  height: 125px;
}

.card .container-img {
  display: flex;
  align-items: center;
}
.card .project-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white);
}
.card .project-langs {
  display: flex;
}
.card .project-langs div {
  margin-right: 8px;
  display: flex;
  align-items: center;
}
.card .project-langs div span {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
}
</style>
