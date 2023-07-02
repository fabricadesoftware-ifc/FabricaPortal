<script lang="ts" setup>
const langs = [{ name: 'vuejs' }, { name: 'react' }, { name: 'django' }, { name: 'tailwind-css' }]
</script>

<template>
  <section>
    <div v-for="(lang, i) in langs" :key="i">
      <box-icon type="logo" size="7em" color="#555" :name="lang.name" />
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  height: 194px;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
