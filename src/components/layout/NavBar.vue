<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppIcon from '@/components/global/AppIcon.vue'
import logo from '@/assets/logo.svg'
import { navLinks } from '@/constants/links'
import GithubButton from './GithubButton.vue'

const props = defineProps<{
  /** Whether a loading screen hides the navbar. */
  isCovered: boolean
}>()

const route = useRoute()
const isMenuOpen = ref(false)

const desktopNav = useTemplateRef('desktopNav')
/** Box of the highlight behind the active link. Null while the nav is hidden. */
const highlight = ref<{ left: number; width: number } | null>(null)

const isActive = (to: string) =>
  to === '/' ? route.path === '/' : route.path === to || route.path.startsWith(`${to}/`)

function moveHighlight() {
  // Waits for the screen to leave, so the slide is seen.
  if (props.isCovered) return

  const link = desktopNav.value?.querySelector<HTMLElement>('[aria-current="page"]')
  highlight.value = link?.offsetWidth ? { left: link.offsetLeft, width: link.offsetWidth } : null
}

watch(
  () => route.path,
  () => (isMenuOpen.value = false),
)
watch(() => [route.path, props.isCovered], moveHighlight, { flush: 'post' })

// The links change size when the fonts load and when the nav leaves the mobile layout.
let resizeObserver: ResizeObserver | undefined

onMounted(() => {
  if (!desktopNav.value) return
  resizeObserver = new ResizeObserver(moveHighlight)
  resizeObserver.observe(desktopNav.value)
})

onBeforeUnmount(() => resizeObserver?.disconnect())
</script>

<template>
  <!-- Covers the whole page, so the sticky navs follow the scroll below the announcement bar. -->
  <header
    class="pointer-events-none absolute inset-0 z-50 px-(--page-padding) pt-8 md:pt-10 *:pointer-events-auto"
    @keydown.esc="isMenuOpen = false"
  >
    <RouterLink to="/" aria-label="Fábrica de Software" class="absolute">
      <img :src="logo" alt="" class="h-11 w-auto" />
    </RouterLink>

    <nav
      ref="desktopNav"
      aria-label="Principal"
      class="sticky top-10 mx-auto hidden w-fit items-center gap-1 rounded-xl border border-white/8 bg-surface/90 p-1.5 shadow-lg shadow-black/40 backdrop-blur md:flex"
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
        class="relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors"
        :class="isActive(link.to) ? 'text-white' : 'text-white/90 hover:bg-white/5'"
      >
        {{ link.label }}
      </RouterLink>
      <GithubButton class="ml-1" />
    </nav>

    <div class="pointer-events-none sticky top-8 *:pointer-events-auto md:hidden">
      <button
        type="button"
        class="ml-auto grid size-11 cursor-pointer place-items-center rounded-lg border border-white/8 bg-surface"
        :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <AppIcon :name="isMenuOpen ? 'close' : 'menu'" class="size-5" />
      </button>

      <nav
        v-if="isMenuOpen"
        id="mobile-menu"
        aria-label="Principal"
        class="absolute inset-x-0 top-full mt-3 flex flex-col gap-1 rounded-xl border border-white/8 bg-surface p-2 shadow-xl shadow-black/60"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :aria-current="isActive(link.to) ? 'page' : undefined"
          class="rounded-lg px-4 py-3 font-medium"
          :class="isActive(link.to) ? 'bg-white/10' : 'text-white/90'"
        >
          {{ link.label }}
        </RouterLink>
        <GithubButton />
      </nav>
    </div>
  </header>
</template>
