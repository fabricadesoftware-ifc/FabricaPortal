<script lang="ts" setup>
const langs = [{ name: 'vuejs' }, { name: 'react' }, { name: 'django' }, { name: 'tailwind-css' }]
</script>

<template>
  <section>
    <div v-for="(lang, i) in langs" :key="i">
      <box-icon type="logo" size="7em" color="var(--dark-gray)" :name="lang.name" />
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  background-color: var(--bg-gray);
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  section {
  flex-direction: column;
  height: auto;
}
}

@media only screen and (min-width: 600px) {}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 992px) {}

@media only screen and (min-width: 1200px) {}
</style>
