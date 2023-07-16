<script lang="ts" setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';
import {onMounted, ref, onUnmounted,} from 'vue'



interface ILink {
  text?: string
  icon?: string
  to: string
  active?: string
}

const links: Array<ILink> = [
  {text: 'NOTÍCIAS', to: '/noticias', active: 'noticias-effect'},
  {text: 'PROJETOS', to: '/?#projetos', active: 'projetos-effect'},
  {text: 'MEMBROS', to: '/?#membros', active: 'membros-effect'},
  {text: 'PUBLICAÇÕES', to: '/publicacoes', active: 'publicacoes-effect'},
]

const redesSociais: Array<ILink> = [
  {icon: "github", to: "/"},
  {icon: "linkedin-square", to: "/"},
  {icon: "instagram", to: "/"},
]


const logoResponId = ref<HTMLElement | null>(null)
const logoId = ref<HTMLElement | null>(null)
const navbar = ref<HTMLElement | null>(null)


//! preciso que ao voltar para a HomeView,
//! atualize a página para que o efeito
//! do nav transparente volte a funcionar


const returnToHome = () => {
  const route = useRoute();
  const router = useRouter();

  if (route.path === '/') {
    window.location.reload(); 
  } else {
    router.push('/'); 
  }
};

onMounted(() => {
  window.addEventListener('load', scrollFunction)
  window.addEventListener('scroll', scrollFunction)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollFunction)
})

function scrollFunction(): void {
  if (window.location.pathname === "/" && navbar.value && logoResponId.value && logoId.value) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollTop > 100) {
      navbar.value.style.padding = "45px 145px";
      logoResponId.value.style.opacity = "0";
      logoResponId.value.style.display = "none";
      logoId.value.style.display = "block";
      logoId.value.style.opacity = "1";
      navbar.value.style.backgroundColor = "#101215";
    } else {
      navbar.value.style.padding = "60px 145px";
      logoId.value.style.opacity = "0";
      logoId.value.style.display = "none";
      logoResponId.value.style.display = "block";
      logoResponId.value.style.opacity = "1";
      navbar.value.style.backgroundColor = "transparent";
    }
  }
}
</script>

<template>
  <nav id="navbar" ref="navbar">
    <RouterLink @click="returnToHome()" to="/" exact  >
      <img ref="logoResponId" id="logo-respon-id" src="src/assets/images/logos/LogoHorizontalCor.svg" alt="" />
      <img  ref="logoId" id="logo-id" src="src/assets/images/logos/LogoHorizontal.svg" alt="" />
    </RouterLink>
    <div class="links">
      <a v-for="(link, i) in links" :class="link.active" :href="link.to" :key="i">{{ link.text }}</a>     
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
#logo-respon-id {
  display: none;
}
nav {
  overflow: hidden;
  background-color: transparent;
  height: 73px;
  padding: 40px 145px;
  position: fixed;
  width: -webkit-fill-available;
  width: -moz-available;
  justify-content: space-between;
  display: flex;
  z-index: 99;
  align-items: center;
  transition: 0.4s;
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
