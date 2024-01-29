<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref, onUnmounted } from 'vue'

import NavApi from '@/api/nav'
import { type ILink } from '@/data/mock/nav'

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
  if (
    window.location.pathname === '/' &&
    window.innerWidth > 1280 &&
    navbar.value &&
    logoResponId.value &&
    logoId.value
  ) {
    const scrollTop =
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0

    if (scrollTop > 100) {
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
function closeNavMenu(): void {
  const clickInput = document.getElementById('click') as HTMLInputElement
  if (clickInput) {
    clickInput.checked = false
  }
}
</script>

<template>
  <nav id="navbar" ref="navbar">
    <div>
      <a href="/#hero-section" exact>
        <img ref="logoResponId" id="logo-respon-id" src="/src/assets/images/logos/LogoHorizontalCor.svg" alt="" />
        <img ref="logoId" id="logo-id" src="/src/assets/images/logos/LogoHorizontal.svg" alt="" />
      </a>
    </div>
    <div>
      <input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <div class="nav-links">
        <ul class="links">
          <li v-for="(link, i) in links" :class="link.class" :key="i">
            <a @click="closeNavMenu" :href="link.to">{{ link.text }}</a>
          </li>
        </ul>
        <ul class="redes-sociais-mobile">
          <li v-for="(socialNetwork, i) in socialNetworks" :key="i">
            <RouterLink :to="socialNetwork.to">
              <box-icon style="margin: 0 8px" color="var(--white)" size="2em" type="logo"
                :name="socialNetwork.icon"></box-icon>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <ul class="redes-sociais">
      <li v-for="(socialNetwork, i) in socialNetworks" :key="i">
        <a :href="socialNetwork.to" target="_blank">
          <box-icon style="margin: 0 8px" color="var(--white)" size="2em" type="logo"
            :name="socialNetwork.icon"></box-icon>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* .active {
  color: var(--primary-color);
} */

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

img {
  width: 215px;
}

#logo-respon-id {
  display: none;
}

input[type='checkbox'] {
  display: none;
}

i {
  font-size: 1.5em;
  color: #fff;
  cursor: pointer;
}

ul {
  list-style: none;
}

.redes-sociais-mobile {
  display: flex;
}

a {
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: var(--white);
  position: relative;
}

a::after {
  content: '';
  display: block;
  width: 0;
  height: 4px;
  position: absolute;
  bottom: -5px;
  left: 0;
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}

.nav-links ul li:nth-child(1) a::after {
  background-color: var(--primary-color);
}

.nav-links ul li:nth-child(2) a::after {
  background-color: var(--secondary-color);
}

.nav-links ul li:nth-child(3) a::after {
  background-color: var(--tertiary-color);
}

.nav-links ul li:nth-child(4) a::after {
  background-color: var(--quaternary-color);
}

@media only screen and (min-width: 1280px) {
  .nav-links {
    display: flex;
    gap: 10vh;
    align-items: center;
    /* justify-content: space-between; */
  }

  nav ul {
    display: flex;
    list-style: none;
  }

  .links li {
    margin: 0 15px;
  }

  i {
    display: none;
  }

  input[type='checkbox'] {
    display: none;
  }

  .redes-sociais-mobile {
    display: none;
  }
}

@media only screen and (max-width: 1280px) {
  nav .menu-btn i {
    display: block;
  }

  #logo-respon-id {
    display: none;
  }

  #click:checked~.menu-btn i:before {
    content: '\f00d';
  }

  .redes-sociais {
    display: none;
  }

  .nav-links {
    z-index: 5;
    position: absolute;
    height: 87vh;
    display: flex;
    text-align: center;
    top: 80px;
    padding: 20px;
    list-style: none;
    width: 40%;
    left: 100%;
    background: #131518;
    transition: all var(--effect) cubic-bezier(0, 0.29, 0.68, 0.94);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  #click:checked~.nav-links {
    left: 60%;
  }

  ul li {
    width: 100%;
    margin: 30px 0;
  }
}

@media only screen and (max-width: 768px) {}

@media only screen and (max-width: 600px) {
  nav {
    padding: 40px 25px;
    justify-content: space-between;
  }

  nav img {
    width: 10em;
  }

  nav .nav-links {
    width: 100%;
  }

  #click:checked~.nav-links {
    left: 0%;
  }
}

@media only screen and (max-width: 425px) {
  nav {
    padding: 40px 10px;
  }
}</style>
