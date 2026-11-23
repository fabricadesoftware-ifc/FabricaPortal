<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import AppIcon from '@/components/global/AppIcon.vue'
import logo from '@/assets/logo.svg'
import { useGlobalSearch } from '@/composables/useGlobalSearch'
import { useScrollLock } from '@/composables/useScrollLock'
import { navLinks, socials } from '@/constants/links'

defineProps<{ isActive: (to: string) => boolean }>()

const emit = defineEmits<{ close: [] }>()

const closeButton = useTemplateRef('closeButton')

const router = useRouter()
const query = ref('')
const { groups, results, load } = useGlobalSearch(query)

/** Enter opens the first result. */
function openFirst() {
  const [first] = results.value
  if (!first) return
  router.push(first.to)
  emit('close')
}

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
        <img :src="logo" alt="" width="63" height="44" class="h-14 w-auto" />
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

    <label
      class="item type-ui mt-8 flex items-center gap-3 rounded-lg border border-white/12 bg-surface px-4 py-3 transition-colors focus-within:border-brand-orange/70 [@media(height<30rem)]:mt-5"
      :style="{ '--index': 0 }"
    >
      <AppIcon name="search" class="size-4.5 shrink-0 text-muted" />
      <span class="sr-only">Buscar projetos, membros e notícias</span>
      <input
        v-model="query"
        type="search"
        enterkeyhint="go"
        autocomplete="off"
        placeholder="Buscar projetos, membros e notícias…"
        class="search w-full min-w-0 text-base font-normal outline-none placeholder:text-subtle"
        @focus="load"
        @keydown.enter.prevent="openFirst"
      />
    </label>

    <!-- Takes the place of the links while something is searched. -->
    <div v-if="query.trim()" class="relative mt-6" aria-live="polite">
      <TransitionGroup name="result">
        <section v-for="group in groups" :key="group.label" class="mb-5 w-full">
          <h2 class="type-label font-normal text-subtle">{{ group.label }}</h2>
          <TransitionGroup tag="ul" name="result" class="relative mt-1">
            <li v-for="result in group.results" :key="result.key" class="w-full">
              <RouterLink
                :to="result.to"
                class="type-ui flex items-center gap-3 py-3 transition-colors active:text-brand-orange"
                @click="emit('close')"
              >
                <span
                  class="size-1.5 shrink-0 rounded-full"
                  :style="{ background: group.color }"
                  aria-hidden="true"
                />
                <span class="min-w-0 flex-1 truncate">{{ result.label }}</span>
                <span
                  class="type-label shrink-0 font-normal tracking-normal text-subtle normal-case"
                >
                  {{ result.detail }}
                </span>
              </RouterLink>
            </li>
          </TransitionGroup>
        </section>
      </TransitionGroup>

      <p v-if="!results.length" class="type-small py-6 text-center text-muted">
        Nada encontrado para “{{ query }}”.
      </p>
    </div>

    <nav
      v-else
      aria-label="Principal"
      class="mt-6 border-t border-white/8 pt-6 [@media(height<30rem)]:mt-5 [@media(height<30rem)]:pt-4"
    >
      <ul class="[@media(height<30rem)]:grid [@media(height<30rem)]:grid-cols-2">
        <li
          v-for="(link, index) in navLinks"
          :key="link.to"
          class="item"
          :style="{ '--index': index + 1 }"
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
      :style="{ '--index': navLinks.length + 1 }"
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
/* Blue by default on Chromium. The input is 16px, or iOS zooms in on focus. */
.search::-webkit-search-cancel-button {
  filter: grayscale(1) brightness(1.8);
}

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

/* Results come and go while typing, and the others slide into their place. */
.result-enter-active,
.result-move {
  transition:
    opacity 0.3s ease-out,
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.result-leave-active {
  position: absolute;
  transition: opacity 0.15s ease-in;
}

.result-enter-from {
  opacity: 0;
  transform: translateY(0.5rem);
}

.result-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .item {
    animation: none;
  }

  .result-enter-active,
  .result-move,
  .result-leave-active {
    transition: none;
  }

  .menu-enter-active,
  .menu-leave-active {
    transition: none;
  }
}
</style>
