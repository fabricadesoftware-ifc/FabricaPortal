<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

interface ILink {
  text?: string
  icon?: string
  to: string
  activeClass: string
  id: string
}

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('news')
const route = useRoute()

const haveBanner = computed(() => ['home', 'about'].includes(route.name as string))

const links: ILink[] = [
  { text: 'NOTÍCIAS', to: '/all-news', id: 'news', activeClass: 'after:bg-[#ea6d18]' },
  { text: 'PROJETOS', to: '/projects', id: 'projects', activeClass: 'after:bg-[#267a7a]' },
  { text: 'MEMBROS', to: '/members', id: 'members', activeClass: 'after:bg-[#d94e4e]' },
]

const socialNetworks = [
  { icon: 'fa-github', to: 'https://github.com/fabricadesoftware-ifc' },
  { icon: 'fa-linkedin', to: 'https://br.linkedin.com/company/nodes-fabrica-de-software' },
  { icon: 'fa-twitter', to: 'https://x.com/FabSoftwareIFC' },
  { icon: 'fa-instagram', to: 'https://instagram.com/fabricadesoftware.ifc/' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100

  const sections = ['news', 'projects', 'members', 'publications']
  const offset = 100

  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const top = el.offsetTop - offset
      if (window.scrollY >= top) {
        activeSection.value = id
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.documentElement.style.scrollBehavior = 'smooth'
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav
    :class="[
      'fixed top-0 w-full z-15 transition-all duration-400 flex items-center justify-between px-6 xl:px-36',
      isScrolled || !haveBanner || isMenuOpen ? 'py-5 bg-[#101215]' : 'py-10 bg-transparent',
    ]"
  >
    <div class="shrink-0">
      <RouterLink to="/">
        <img
          v-show="!isScrolled && haveBanner && !isMenuOpen"
          src="/logos/fabrica-horizontalColorido.svg"
          alt="Logo Colorido"
          class="w-40 md:w-53.75"
        />
        <img
          v-show="isScrolled || !haveBanner || isMenuOpen"
          src="/logos/fabrica-horizontal.svg"
          alt="Logo Branco"
          class="w-40 md:w-53.75"
        />
      </RouterLink>
    </div>

    <button @click="toggleMenu" class="xl:hidden text-white text-2xl z-50">
      <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
    </button>

    <div
      :class="[
        'fixed xl:static top-18 xl:top-0 left-0 w-full xl:w-auto h-[95vh] xl:h-auto bg-[#101215] xl:bg-transparent flex flex-col xl:flex-row items-center justify-between xl:justify-center p-10 xl:p-0 transition-all duration-500 ease-in-out gap-10',
        isMenuOpen ? 'left-0' : 'left-full xl:left-0',
        'xl:flex',
      ]"
    >
      <ul class="flex flex-col xl:flex-row gap-8 xl:gap-4 w-full xl:w-auto text-center">
        <li v-for="link in links" :key="link.id" class="relative group">
          <a
            :href="link.to"
            @click="isMenuOpen = false"
            :class="[
              'text-[18px] font-semibold text-white relative after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:h-1 after:transition-all after:duration-300',
              ['after:w-0 hover:after:w-full', link.activeClass],
            ]"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>

      <div class="flex xl:hidden gap-4">
        <a v-for="social in socialNetworks" :key="social.icon" :href="social.to" target="_blank">
          <i :class="['fa-brands scale-180', social.icon]"></i>
        </a>
      </div>
    </div>

    <div class="hidden xl:flex gap-7">
      <a
        v-for="social in socialNetworks"
        :key="social.icon"
        :href="social.to"
        target="_blank"
        class="hover:opacity-80 transition-opacity text-white"
      >
        <i :class="['fa-brands scale-180', social.icon]"></i>
      </a>
    </div>
  </nav>
</template>
