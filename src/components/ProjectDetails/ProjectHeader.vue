<script setup>
defineProps({
  title: String,
  description: String,
  status: String,
  images: String,
  type: String,
  logo: String,
  langs: Array,
})
</script>
<template>
  <header>
    <img class="logo" :src="logo" alt="" />
    <div class="title-status">
      <h2>{{ title }}</h2>
      <div class="links">
        <a href=""><box-icon color="var(--secondary-color)" name='windows'></box-icon> Ver o projeto </a>
        <a href=""><box-icon color="var(--secondary-color)" type='logo' name='github'></box-icon> Repositório no github</a>
        <a href=""><box-icon color="var(--secondary-color)" name='cloud-download'></box-icon> Download</a>
      </div>
    </div>
  </header>
</template>
<style scoped>
/*padronizar os h2*/
h2 {
  color: var(--text-color);
  margin: 0;
}

header h3 {
  color: var(--members);
  text-transform: uppercase;
  font-weight: 600;
}

.title-status {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

header {
  width: 100%;
  display: flex;
}

.logo {
  max-width: 100px;
  height: fit-content;
  margin-right: 15px;
}

.links {
  display: flex;
  gap: 15px;
}

a {
  color: var(--text-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
}

a:hover {
  color: var(--secondary-color);
  text-decoration: underline;

}

.details div {
  display: flex;
  align-items: center;
}

section {
  margin-bottom: 14px;
}</style>
