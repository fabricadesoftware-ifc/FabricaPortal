<script setup>
defineProps({
  description: String,
  title: String,
  logo: String,
  status: String,
  type: String,
  linkProject: { type: Object }
})
const UrlProject = (id) => {
  return `/project/${id}`
}
</script>

<template>
  <router-link :to="UrlProject(linkProject.id)">
    <div class="card">
      <img :src="logo" alt="" />
      <div class="content">
        <header>
          <h4>{{ title }}</h4>
          <div class="status">
            <span>{{ status }}</span>
          </div>
        </header>
        <p>{{ description }}</p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
a {
  text-decoration: none;
  width: 100%;
}

p {
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 3px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
img {
  width: 5em;
  height: 5em;
}
h4 {
  font-weight: 500;
}

.card {
  width: 100%;
  margin: 10px 0;
  height: auto;
  gap: 1em;
  display: flex;
  flex-direction: row;
  padding: 15px;
  transition: 0.25s ease;
  align-items: center;
}
.card:hover {
  cursor: pointer;
  transform: translateY(-5px);
}
.content {
  width: 100%
}
header {
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 475px) {
  .status {
    display: none
  }
}
</style>
