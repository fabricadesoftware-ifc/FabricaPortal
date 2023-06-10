<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav>
    <img src="src/assets/images/logos/LogoHorizontal.svg" alt="" />
    <div class="links">
      <RouterLink to="/">NOTÍCIAS</RouterLink>
      <RouterLink to="/">PROJETOS</RouterLink>
      <RouterLink to="/">MEMBROS</RouterLink>
      <RouterLink to="/">PUBLICAÇÕES</RouterLink>
    </div>
    <div class="rede-sociais">
      <RouterLink to="/">
        <box-icon
          style="margin: 0 8px"
          color="#fff"
          size="2em"
          name="github"
          type="logo"
        ></box-icon>
      </RouterLink>
      <RouterLink to="/">
        <box-icon
          style="margin: 0 8px"
          color="#fff"
          size="2em"
          type="logo"
          name="linkedin-square"
        ></box-icon>
      </RouterLink>
      <RouterLink to="/">
        <box-icon
          style="margin: 0 8px"
          color="#fff"
          size="2em"
          type="logo"
          name="instagram"
        ></box-icon>
      </RouterLink>
    </div>
  </nav>
</template>
<style scoped>
nav {
  background-color: var(--black);
  height: 73px;
  padding: 0 145px;
  position: fixed;
  width: -webkit-fill-available;
  justify-content: space-between;
  display: flex;
  align-items: center;
}

nav img {
  width: 215px;
}

nav .redes-sociais {
  display: flex;
}

nav .links a {
  color: var(--white);
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  margin: 0 15px;
}
</style>
