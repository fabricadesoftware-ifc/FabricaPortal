<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppIcon from '@/components/global/AppIcon.vue'
import logo from '@/assets/logo.svg'
import { useSlidingHighlight } from '@/composables/useSlidingHighlight'
import { navLinks } from '@/constants/links'
import GithubButton from './GithubButton.vue'
import GlobalSearch from './GlobalSearch.vue'
import MobileMenu from './MobileMenu.vue'
import WeatherButton from './WeatherButton.vue'

const props = defineProps<{
  /** Whether a loading screen hides the navbar. */
  isCovered: boolean
}>()

const route = useRoute()
const isMenuOpen = ref(false)

const desktopNav = useTemplateRef('desktopNav')
const highlight = useSlidingHighlight(desktopNav, {
  selector: '[aria-current="page"]',
  source: () => [route.path, props.isCovered],
  // Waits for the screen to leave, so the slide is seen.
  isPaused: () => props.isCovered,
})

// Only the page itself: a member or a notice is not the list of them.
const isActive = (to: string) => route.path.replace(/\/$/, '') === to.replace(/\/$/, '')

// Already on the home page, the logo goes back to its top.
function toTop() {
  if (route.path !== '/') return
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
}

const menuButton = useTemplateRef('menuButton')

async function closeMenu() {
  isMenuOpen.value = false
  await nextTick()
  menuButton.value?.focus({ preventScroll: true })
}

watch(
  () => route.path,
  () => (isMenuOpen.value = false),
)

// Larger screens have the whole navbar.
const largeScreen = window.matchMedia('(width >= 48rem)')
const onResize = () => {
  if (largeScreen.matches) isMenuOpen.value = false
}

onMounted(() => largeScreen.addEventListener('change', onResize))
onBeforeUnmount(() => largeScreen.removeEventListener('change', onResize))
</script>

<template>
  <!-- Covers the whole page, so the sticky navs follow the scroll. -->
  <header
    class="pointer-events-none absolute inset-0 z-50 px-(--page-padding) pt-8 md:pt-10 *:pointer-events-auto"
  >
    <RouterLink to="/" aria-label="Fábrica de Software — Início" class="absolute" @click="toTop">
      <img :src="logo" alt="" width="63" height="44" class="h-14 w-auto" />
    </RouterLink>

    <nav
      ref="desktopNav"
      aria-label="Principal"
      class="sticky top-10 mx-auto hidden w-fit items-center gap-1 rounded-xl border border-white/8 bg-surface p-1.5 md:flex"
    >
      <span
        v-if="highlight"
        class="absolute inset-y-1.5 left-0 rounded-lg bg-white/10 transition-[translate,width] delay-150 duration-300 ease-out motion-reduce:transition-none"
        :style="{ translate: `${highlight.left}px`, width: `${highlight.width}px` }"
        aria-hidden="true"
      />
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        :aria-current="isActive(link.to) ? 'page' : undefined"
        class="type-ui relative rounded-lg px-3.5 py-2 transition-colors"
        :class="isActive(link.to) ? 'text-white' : 'text-white/90 hover:bg-white/5'"
      >
        {{ link.label }}
      </RouterLink>
      <GlobalSearch class="ml-1" />
      <GithubButton class="ml-1" />
    </nav>

    <!-- Needs the room beside the centered navbar. -->
    <div class="absolute top-10 right-(--page-padding) hidden lg:block">
      <WeatherButton />
    </div>

    <div
      class="pointer-events-none sticky top-8 flex justify-end gap-2 *:pointer-events-auto md:hidden"
    >
      <WeatherButton is-sheet />
      <button
        ref="menuButton"
        type="button"
        class="grid size-11 cursor-pointer place-items-center rounded-lg border border-white/8 bg-surface"
        aria-label="Abrir menu"
        aria-haspopup="dialog"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        @click="isMenuOpen = true"
      >
        <AppIcon name="menu" class="size-5" />
      </button>
    </div>

    <!-- Out of the page, which cannot be used while the menu is open. -->
    <Teleport to="body">
      <Transition name="menu">
        <MobileMenu v-if="isMenuOpen" :is-active="isActive" @close="closeMenu" />
      </Transition>
    </Teleport>
  </header>
</template>
