<script lang="ts" setup>
import { RouterLink } from 'vue-router'

interface ILink {
  text?: string;
  icon?: string,
  to: string;
}

const links: Array<ILink> = [
  {text: 'NOTÍCIAS', to: '/noticias'},
  {text: 'PROJETOS', to: '/?#projetos'},
  {text: 'MEMBROS', to: '/?#membros'},
  {text: 'PUBLICAÇÕES', to: '/publicacaos'},
]

const redesSociais: Array<ILink> = [
  {icon: "github", to: "/"},
  {icon: "linkedin-square", to: "/"},
  {icon: "instagram", to: "/"},
]
</script>

<template>
  <nav>
    <RouterLink to="/">
      <img src="src/assets/images/logos/LogoHorizontal.svg" alt="" />
    </RouterLink>
    <div class="links">
      <a v-for="(link, i) in links" :href="link.to" :key="i">{{ link.text }}</a>     
    </div>
    <div class="rede-sociais">
      <RouterLink v-for="(redeSocial, i) in redesSociais" :key="i" :to="redeSocial.to">
        <box-icon
          style="margin: 0 8px"
          color="var(--color-icon-nav)"
          size="2em"
          type="logo"
          :name="redeSocial.icon"
        ></box-icon>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--background-color-nav);
  height: 73px;
  padding: 0 145px;
  position: fixed;
  width: -webkit-fill-available;
  width: -moz-available;
  justify-content: space-between;
  display: flex;
  z-index: 2;
  align-items: center;
}

nav img {
  width: 215px;
}

nav .redes-sociais {
  display: flex;
}

nav .links a {
  color: var(--color-links-nav);
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  margin: 0 15px;
}
</style>
