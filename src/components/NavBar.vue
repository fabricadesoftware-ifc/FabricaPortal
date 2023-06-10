<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
  <nav>
    <img src="src/assets/images/logos/LogoHorizontal.svg" alt="">
    <div class="links">
        <RouterLink to="/">NOTÍCIAS</RouterLink>
        <RouterLink to="/">PROJETOS</RouterLink>
        <RouterLink to="/">MEMBROS</RouterLink>
        <RouterLink to="/">PUBLICAÇÕES</RouterLink>
    </div>
    <div class="rede-sociais">
      <box-icon style="margin: 0 8px" color="#fff" size="2em" name='github' type='logo' ></box-icon>
      <box-icon style="margin: 0 8px" color="#fff" size="2em" type='logo' name='linkedin-square'></box-icon>
      <box-icon style="margin: 0 8px" color="#fff" size="2em" type='logo' name='instagram'></box-icon>
    </div>
  </nav>
</template>
<style scoped>

</style>