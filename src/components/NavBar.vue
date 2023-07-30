<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref, onUnmounted } from 'vue'

import NavApi from '@/api/nav'
import { type ILink } from '@/_data/nav'

const navApi = new NavApi()
const links = ref<Array<ILink>>([])
const socialNetworks = ref<Array<ILink>>([])

onMounted(async () => {
  links.value = navApi.getLinks()
  socialNetworks.value = navApi.getSocialNetworks()
})

const logoResponId = ref<HTMLElement | null>(null)
const logoId = ref<HTMLElement | null>(null)
const navbar = ref<HTMLElement | null>(null)

onMounted(() => {
  window.addEventListener('load', scrollFunction)
  window.addEventListener('scroll', scrollFunction)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollFunction)
})

function scrollFunction(): void {
  if (window.location.pathname === '/' &&  window.innerWidth > 1280 && navbar.value && logoResponId.value && logoId.value) {
    const scrollTop =
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0

    if (scrollTop > 100 ) {
      navbar.value.style.padding = '45px 145px'
      logoResponId.value.style.opacity = '0'
      logoResponId.value.style.display = 'none'
      logoId.value.style.display = 'block'
      logoId.value.style.opacity = '1'
      navbar.value.style.backgroundColor = '#101215'
    } else {
      navbar.value.style.padding = '60px 145px'
      logoId.value.style.opacity = '0'
      logoId.value.style.display = 'none'
      logoResponId.value.style.display = 'block'
      logoResponId.value.style.opacity = '1'
      navbar.value.style.backgroundColor = 'transparent'
    }
  }
}

const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('nav a')
document.documentElement.style.scrollBehavior = 'smooth'
window.onscroll = () => {
  let current: string | null = null

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const offset = 60

    if (window.scrollY + offset >= sectionTop) {
      current = section.getAttribute('id')
    }
  })

  navLinks.forEach((a) => {
    a.classList.remove('active')
    if (current && a.classList.contains(current)) {
      a.classList.add('active')
    }
  })
}
</script>

<template>
  <nav id="navbar" ref="navbar">
    <div>
      <a href="http://localhost:5173/#hero-section" exact>
        <img
          ref="logoResponId"
          id="logo-respon-id"
          src="/src/assets/images/logos/LogoHorizontalCor.svg"
          alt=""
        />
        <img ref="logoId" id="logo-id" src="/src/assets/images/logos/LogoHorizontal.svg" alt="" />
      </a>
    </div>
    <div>
      <input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li v-for="(link, i) in links" :class="link.class" :key="i">
          <a :href="link.to">{{ link.text }}</a>
        </li>
      </ul>
    </div>
    <div class="rede-sociais">
      <RouterLink v-for="(socialNetwork, i) in socialNetworks" :key="i" :to="socialNetwork.to">
        <box-icon
          style="margin: 0 8px"
          color="var(--white)"
          size="2em"
          type="logo"
          :name="socialNetwork.icon"
        ></box-icon>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.active {
  color: var(--primary-color);
}
nav {
  background-color: var(--bg-black);
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
  color: var(--white);
}
nav img {
  width: 215px;
}
input[type="checkbox"] {
  display: none;
}
i{
  font-size: 1.5em;
}

@media only screen and (max-width: 1280px) {
  nav .menu-btn i {
    display: block;
  }

  .rede-sociais {
    display: none;
  }

  #logo-respon-id {
    display: none;
  }
  #click:checked ~ .menu-btn i:before {
    content: '\f00d';
  }

  nav ul {
    z-index: 5;
    position: absolute;
    height: 100vh;
    top: 73px;
    list-style: none;
    left: 100%;
    background: #131518;
    width: 30%;
    text-align: center;
    display: block;
    transition: all var(--effect) cubic-bezier(0, 0.29, 0.68, 0.94);
  }

  #click:checked ~ ul {
    left: 70%;
    top: 12vh;
  }

  nav ul li {
    width: 100%;
    margin: 40px 0;
  }

  nav ul li a {
    width: 100%;
    display: block;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    color: var(--white);
  }

}

@media only screen and (min-width: 1280px) {
  nav .redes-sociais {
    display: flex;
  }
  nav ul {
    display: flex;
    list-style: none;
  }
  nav ul a {
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    margin: 0 15px;
    color: var(--white);
  }

  i {
    color: #fff;
    font-size: 1.5em;
    cursor: pointer;
    display: none;
  }

  input[type='checkbox'] {
    display: none;
  }
}
@media only screen and (max-width: 768px) {
  nav ul {
    width: 100%;
  }
  #click:checked ~ ul {
    left: 0;
  }
  nav {
    padding: 0 50px;

  }
}
@media only screen and (max-width: 600px) {
  nav {
    padding: 40px 25px;
    justify-content: space-between;
  }
  nav img {
  width: 10em;
}
}


@media only screen and (min-width: 600px) {
}

@media only screen and (max-width: 425px) {
  nav {
    padding: 40px 10px;
  }
}


</style>
