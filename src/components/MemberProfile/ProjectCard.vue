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
  <div class="card">
    <router-link to="/">

    </router-link>
    <div class="container-details">
      <div>
        <h4>{{ title }}</h4>
        <div class="status">
          <h5>{{ status }}</h5>
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
}

.card .container-details {
  width: 100%;
  padding: 15px;
}

.card .container-details div {
  display: flex;
  justify-content: space-between;
}
.card .container-details p {
  max-height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card .container-details .status {
  display: flex;
  align-items: center;
}

.card .status h5 {
  padding: 5px;
  background-color: var(--color-details-members);
  color: var(--white);
  width: max-content;
  margin-left: 5px;
}
</style>
