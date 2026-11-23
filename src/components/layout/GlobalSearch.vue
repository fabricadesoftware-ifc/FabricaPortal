<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppIcon from '@/components/global/AppIcon.vue'
import { useClickOutside } from '@/composables/useClickOutside'
import { useGlobalSearch } from '@/composables/useGlobalSearch'

const route = useRoute()
const router = useRouter()

const isOpen = ref(false)
const query = ref('')
const activeIndex = ref(0)

const { groups, results, load } = useGlobalSearch(query)

const root = useTemplateRef('root')
const input = useTemplateRef('input')
const button = useTemplateRef('button')
const list = useTemplateRef('list')

const isMac = /Mac|iPhone|iPad/.test(navigator.platform)

async function open() {
  isOpen.value = true
  load()
  await nextTick()
  input.value?.focus()
}

function close({ restoreFocus = false } = {}) {
  if (!isOpen.value) return
  isOpen.value = false
  isShown.value = false
  query.value = ''
  if (restoreFocus) button.value?.focus({ preventScroll: true })
}

function go(index = activeIndex.value) {
  const result = results.value[index]
  if (!result) return
  close()
  router.push(result.to)
}

const activeId = computed(() => {
  const result = results.value[activeIndex.value]
  return result && `search-${result.key}`
})

const indexOf = (key: string) => results.value.findIndex((result) => result.key === key)

function move(step: 1 | -1) {
  const count = results.value.length
  isShown.value = true
  if (!count) return
  activeIndex.value = (activeIndex.value + step + count) % count
  nextTick(() =>
    list.value?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' }),
  )
}

watch(query, () => (activeIndex.value = 0))

/** Box of the chosen result, inside the list. */
const highlight = ref<{ top: number; height: number } | null>(null)
/** Only under the pointer, or after the arrows were used. */
const isShown = ref(false)
/** Off while hidden, so the box appears in place instead of sliding from the last result. */
const canSlide = ref(false)

watch(isShown, (value) => {
  if (!value) canSlide.value = false
  else requestAnimationFrame(() => (canSlide.value = isShown.value))
})

function point(index: number) {
  activeIndex.value = index
  isShown.value = true
}

watch(
  [activeIndex, results, isOpen],
  () => {
    const option = list.value?.querySelector<HTMLElement>('[aria-selected="true"]')
    highlight.value = option ? { top: option.offsetTop, height: option.offsetHeight } : null
  },
  { flush: 'post' },
)
watch(
  () => route.path,
  () => close(),
)

useClickOutside(root, () => close())

// Ctrl K (⌘ K on Mac) opens it from anywhere.
function onShortcut(event: KeyboardEvent) {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    if (isOpen.value) close({ restoreFocus: true })
    else open()
  }
}

onMounted(() => document.addEventListener('keydown', onShortcut))
onBeforeUnmount(() => document.removeEventListener('keydown', onShortcut))
</script>

<template>
  <!-- Not positioned, so the panel spans the whole navbar. -->
  <div ref="root">
    <button
      ref="button"
      type="button"
      class="group type-ui flex cursor-pointer items-center gap-2.5 rounded-lg border px-3.5 py-[calc(0.5rem-1px)] transition-[border-color,background-color,scale] duration-200 ease-out hover:bg-white/5 active:scale-[0.98]"
      :class="
        isOpen ? 'border-brand-orange/70 bg-white/5' : 'border-white/12 hover:border-white/25'
      "
      aria-haspopup="dialog"
      :aria-expanded="isOpen"
      aria-controls="global-search"
      @click="isOpen ? close() : open()"
    >
      <AppIcon
        name="search"
        class="size-4 transition-[rotate,scale] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-12 motion-reduce:transition-none"
      />
      Buscar
      <kbd
        class="type-label ml-3 rounded border border-white/12 px-1.5 font-normal tracking-normal text-muted normal-case transition-colors group-hover:border-white/25 group-hover:text-white"
      >
        {{ isMac ? '⌘' : 'Ctrl' }} K
      </kbd>
    </button>

    <!-- Longer than the panel itself, for the results that come after it. -->
    <Transition name="search" :duration="{ enter: 500, leave: 150 }">
      <div
        v-if="isOpen"
        id="global-search"
        role="dialog"
        aria-label="Busca"
        class="absolute inset-x-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-xl border border-white/8 bg-surface shadow-2xl shadow-black/60"
        @keydown.esc.prevent="close({ restoreFocus: true })"
      >
        <label class="flex items-center gap-3 border-b border-white/8 px-5 py-4">
          <AppIcon name="search" class="size-4.5 shrink-0 text-muted" />
          <span class="sr-only">Buscar projetos, membros e notícias</span>
          <input
            ref="input"
            v-model="query"
            type="text"
            role="combobox"
            autocomplete="off"
            aria-controls="global-search-results"
            aria-expanded="true"
            :aria-activedescendant="activeId"
            placeholder="Buscar projetos, membros e notícias…"
            class="type-ui w-full min-w-0 font-normal outline-none placeholder:text-subtle"
            @keydown.down.prevent="move(1)"
            @keydown.up.prevent="move(-1)"
            @keydown.enter.prevent="go()"
          />
        </label>

        <div
          id="global-search-results"
          ref="list"
          role="listbox"
          aria-label="Resultados"
          class="results relative overflow-y-auto overscroll-contain py-2"
          @pointerleave="isShown = false"
        >
          <!-- Slides from result to result, like the highlight of the navbar. -->
          <span
            v-if="highlight"
            class="absolute inset-x-2 top-0 rounded-lg bg-white/6 duration-200 ease-out motion-reduce:transition-none"
            :class="[
              canSlide ? 'transition-[translate,height,opacity]' : 'transition-opacity',
              { 'opacity-0': !isShown },
            ]"
            :style="{ translate: `0 ${highlight.top}px`, height: `${highlight.height}px` }"
            aria-hidden="true"
          />
          <div v-for="group in groups" :key="group.label" role="group" :aria-label="group.label">
            <p class="type-label px-5 pt-3 pb-2 font-normal text-subtle" aria-hidden="true">
              {{ group.label }}
            </p>
            <div
              v-for="result in group.results"
              :id="`search-${result.key}`"
              :key="result.key"
              role="option"
              :aria-selected="indexOf(result.key) === activeIndex"
              class="type-ui relative mx-2 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5"
              :style="{ '--i': indexOf(result.key) }"
              @pointermove="point(indexOf(result.key))"
              @click="go(indexOf(result.key))"
            >
              <span
                class="size-1.5 shrink-0 rounded-full"
                :style="{ background: group.color }"
                aria-hidden="true"
              />
              <span class="min-w-0 flex-1 truncate">{{ result.label }}</span>
              <span class="type-label shrink-0 font-normal tracking-normal text-subtle normal-case">
                {{ result.detail }}
              </span>
            </div>
          </div>

          <p v-if="!results.length" class="type-small px-5 py-6 text-center text-muted">
            Nada encontrado para “{{ query }}”.
          </p>
        </div>

        <p
          class="type-label flex gap-4 border-t border-white/8 px-5 py-3 font-normal text-subtle"
          aria-hidden="true"
        >
          <span>↵ Abrir</span>
          <span>↑↓ Navegar</span>
          <span>Esc Fechar</span>
        </p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.results {
  max-height: min(22rem, 60svh);
}

.search-enter-active {
  transition:
    opacity 0.2s ease-out,
    translate 0.3s var(--ease-out-expo),
    scale 0.3s var(--ease-out-expo),
    clip-path 0.3s var(--ease-out-expo);
}

.search-leave-active {
  transition:
    opacity 0.15s ease-in,
    translate 0.15s ease-in,
    scale 0.15s ease-in;
}

/* Unfolds down from the navbar. */
.search-enter-from {
  opacity: 0;
  translate: 0 -0.5rem;
  scale: 0.98;
  clip-path: inset(0 0 100% 0 round 0.75rem);
}

.search-leave-to {
  opacity: 0;
  translate: 0 -0.25rem;
  scale: 0.99;
}

/* The results follow one after the other, only when it opens. */
.search-enter-active [role='option'] {
  transition:
    opacity 0.2s ease-out,
    translate 0.25s var(--ease-out-expo);
  transition-delay: calc(min(var(--i), 8) * 20ms + 60ms);
}

.search-enter-from [role='option'] {
  opacity: 0;
  translate: 0 0.375rem;
}

.search-enter-active {
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: top center;
}

@media (prefers-reduced-motion: reduce) {
  .search-enter-active,
  .search-leave-active,
  .search-enter-active [role='option'] {
    transition: opacity 0.15s ease-out;
    transition-delay: 0s;
  }

  .search-enter-from,
  .search-leave-to,
  .search-enter-from [role='option'] {
    translate: none;
    scale: none;
    clip-path: none;
  }
}
</style>
