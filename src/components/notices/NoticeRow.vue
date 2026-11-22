<script setup lang="ts">
import { computed, ref, useId, useTemplateRef } from 'vue'
import { RouterLink } from 'vue-router'
import { useNoticeText } from '@/composables/useNoticeText'
import { noticeCategories } from '@/constants/notices'
import type { Notice } from '@/types/notice'
import { formatShortMonth } from '@/utils/formatDate'
import NoticeText from './NoticeText.vue'

const props = defineProps<{ notice: Notice }>()

const { text, readingTime } = useNoticeText(props.notice.id)

const isOpen = ref(false)
const textId = useId()
const color = computed(() =>
  props.notice.category ? noticeCategories[props.notice.category].color : undefined,
)

const row = useTemplateRef('row')

function toggle() {
  isOpen.value = !isOpen.value
  if (isOpen.value || !row.value || row.value.getBoundingClientRect().top >= 0) return

  // The text is taller than the screen: goes back to the title, instead of to another notice.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  row.value.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
}
</script>

<template>
  <article
    ref="row"
    class="row scroll-mt-24 border-t border-white/8 py-8 md:py-10"
    :class="{ 'is-open': isOpen }"
  >
    <time :datetime="notice.date" class="date">
      <span class="type-h3 block">{{ notice.date.slice(-2) }}</span>
      <span class="type-label block text-muted">{{ formatShortMonth(notice.date) }}</span>
    </time>

    <div class="content min-w-0">
      <p v-if="notice.category" class="type-label" :style="{ color }">{{ notice.category }}</p>
      <h3 class="type-h3 mt-2">
        <RouterLink :to="`/notices/${notice.id}`" class="transition-colors hover:text-accent">
          {{ notice.title }}
        </RouterLink>
      </h3>
      <p v-if="notice.summary" class="type-body mt-3 max-w-xl text-muted">{{ notice.summary }}</p>
      <div v-if="text" :id="textId" class="panel" :inert="!isOpen">
        <div class="overflow-hidden">
          <NoticeText :text="text" class="text relative mt-6 max-w-2xl pl-5 md:pl-6" />
        </div>
      </div>
    </div>

    <div v-if="text" class="actions">
      <p class="type-label text-subtle">{{ readingTime }} min de leitura</p>
      <button
        type="button"
        :aria-expanded="isOpen"
        :aria-controls="textId"
        class="group type-ui -my-3 inline-flex cursor-pointer gap-2.5 py-3 text-accent"
        @click="toggle"
      >
        <!-- One over the other, so the button keeps its width. -->
        <span class="labels underline-offset-4 group-hover:underline">
          <span :aria-hidden="isOpen">Ler notícia</span>
          <span :aria-hidden="!isOpen">Fechar</span>
          <span class="sr-only">: {{ notice.title }}</span>
        </span>
        <span
          class="transition-transform duration-400 motion-reduce:transition-none"
          :class="isOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'"
          aria-hidden="true"
          >↓</span
        >
      </button>
    </div>
  </article>
</template>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 5rem minmax(0, 1fr);
  gap: 1.5rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  grid-column: 2;
  gap: 0.75rem 1.5rem;
  align-items: center;
  justify-content: space-between;
}

/* Grows up to the height of the text. */
.panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.is-open .panel {
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

/* The text comes after the space for it, and leaves before. */
.text {
  opacity: 0;
  transform: translateY(-0.75rem);
  transition:
    opacity 0.2s,
    transform 0.35s;
}

.is-open .text {
  opacity: 1;
  transform: none;
  transition:
    opacity 0.45s 0.15s,
    transform 0.55s 0.1s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Line beside the text, drawn from the top. */
.text::before {
  position: absolute;
  inset-block: 0;
  left: 0;
  width: 2px;
  background: rgb(255 255 255 / 0.12);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.35s;
  content: '';
}

.is-open .text::before {
  transform: none;
  transition: transform 0.7s 0.1s cubic-bezier(0.22, 1, 0.36, 1);
}

.labels {
  display: grid;
  justify-items: end;
}

.labels > span:not(.sr-only) {
  grid-area: 1 / 1;
  transition:
    opacity 0.25s,
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.labels > [aria-hidden='true'] {
  opacity: 0;
  transform: translateY(0.375rem);
}

@media (prefers-reduced-motion: reduce) {
  .panel,
  .is-open .panel,
  .text,
  .is-open .text,
  .text::before,
  .is-open .text::before,
  .labels > span:not(.sr-only) {
    transition: none;
  }
}

@media (width >= 64rem) {
  .row {
    grid-template-columns: calc(5rem * var(--type-scale, 1)) minmax(0, 1fr) auto;
    gap: 2rem;
  }

  .actions {
    flex-direction: column;
    grid-column: 3;
    align-items: flex-end;
    justify-content: flex-start;
  }
}

/* Small screens have no room for a column of dates. */
@media (width < 40rem) {
  .row {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
  }

  .date {
    display: flex;
    gap: 0.625rem;
    align-items: baseline;
  }

  .actions {
    grid-column: 1;
  }
}
</style>
