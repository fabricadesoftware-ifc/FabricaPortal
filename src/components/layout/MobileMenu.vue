<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import { RouterLink } from 'vue-router'
import AppIcon from '@/components/global/AppIcon.vue'
import logo from '@/assets/logo.svg'
import { useScrollLock } from '@/composables/useScrollLock'
import { navLinks, socials } from '@/constants/links'

defineProps<{ isActive: (to: string) => boolean }>()

const emit = defineEmits<{ close: [] }>()

const closeButton = useTemplateRef('closeButton')

useScrollLock()

// Keeps the keyboard and the screen readers out of the page behind the menu.
const app = document.getElementById('app')

onMounted(() => {
  if (app) app.inert = true
  closeButton.value?.focus({ preventScroll: true })
})

onBeforeUnmount(() => {
  if (app) app.inert = false
})
</script>

<template>
  <div
    id="mobile-menu"
    role="dialog"
    aria-modal="true"
    aria-label="Menu"
    class="menu fixed inset-0 z-60 flex flex-col overflow-y-auto bg-ink px-(--page-padding) pt-8 pb-10 md:hidden [@media(height<30rem)]:pb-6"
    @keydown.esc="emit('close')"
  >
    <!-- In the same place as the logo and the button of the page. -->
    <div class="flex items-start justify-between">
      <RouterLink to="/" aria-label="Fábrica de Software" @click="emit('close')">
        <img :src="logo" alt="" width="63" height="44" class="h-11 w-auto" />
      </RouterLink>
      <button
        ref="closeButton"
        type="button"
        aria-label="Fechar menu"
        class="grid size-11 cursor-pointer place-items-center rounded-lg border border-white/8 bg-surface"
        @click="emit('close')"
      >
        <AppIcon name="close" class="size-5" />
      </button>
    </div>

    <nav
      aria-label="Principal"
      class="mt-8 border-t border-white/8 pt-6 [@media(height<30rem)]:mt-5 [@media(height<30rem)]:pt-4"
    >
      <ul class="[@media(height<30rem)]:grid [@media(height<30rem)]:grid-cols-2">
        <li
          v-for="(link, index) in navLinks"
          :key="link.to"
          class="item"
          :style="{ '--index': index }"
        >
          <RouterLink
            :to="link.to"
            :aria-current="isActive(link.to) ? 'page' : undefined"
            class="type-body block py-2.5 font-medium transition-colors"
            :class="isActive(link.to) ? 'text-brand-orange' : 'text-muted active:text-white'"
            @click="emit('close')"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>

    <ul
      class="item mt-auto flex justify-center gap-2.5 pt-10"
      :style="{ '--index': navLinks.length }"
    >
      <li v-for="social in socials" :key="social.label">
        <a
          :href="social.href"
          :aria-label="social.label"
          target="_blank"
          rel="noopener"
          class="grid size-11 place-items-center rounded-full border border-white/8 bg-surface transition-colors active:border-brand-orange active:text-brand-orange"
        >
          <AppIcon :name="social.icon" class="size-4.5" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* The items come after the panel, one by one. */
.item {
  animation: appear 0.4s calc(0.15s + var(--index) * 0.06s) cubic-bezier(0.22, 1, 0.36, 1) backwards;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateX(2rem);
  }
}

.menu-enter-active {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.menu-leave-active {
  pointer-events: none;
  transition: transform 0.3s cubic-bezier(0.55, 0, 0.8, 0.4);
}

.menu-enter-from,
.menu-leave-to {
  transform: translateX(100%);
}

@media (prefers-reduced-motion: reduce) {
  .item {
    animation: none;
  }

  .menu-enter-active,
  .menu-leave-active {
    transition: none;
  }
}
</style>
