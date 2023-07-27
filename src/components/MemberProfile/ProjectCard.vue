<script setup>
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
  <router-link to="/">
    <div class="card">
      <header>
        <h4>{{ title }}</h4>
        <div class="status">
          <span>{{ status }}</span>
        </div>
      </header>
      <p>{{ description }}</p>
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

h4 {
  font-weight: 500;
}

.card {
  width: 100%;
  margin: 10px 0;
  border-left: 5px solid var(--color-details-members);
  background-color: var(--background-color-card-project);
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 15px;
}


header {
  display: flex;
  justify-content: space-between;
}
</style>
