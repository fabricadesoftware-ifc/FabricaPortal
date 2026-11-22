<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Notice } from '@/types/notice'

const props = defineProps<{
  notice: Notice
  /** The most recent one gets the summary and the link. */
  isFeatured: boolean
}>()

/** "2026-04-13" -> "13/04/2026", without the time zone shifting the day. */
const formattedDate = computed(() => props.notice.date.split('-').reverse().join('/'))
</script>

<template>
  <li
    class="item relative pb-12 pl-10 last:pb-0 md:pl-14 xl:pb-14 xl:pl-16"
    :style="{ '--color': notice.color }"
  >
    <span class="marker" :class="{ filled: isFeatured }" aria-hidden="true" />

    <p class="type-label flex flex-wrap gap-x-4 gap-y-1">
      <time :datetime="notice.date" class="text-muted">{{ formattedDate }}</time>
      <span v-if="notice.category" class="category">{{ notice.category }}</span>
    </p>
    <h3 class="mt-2" :class="isFeatured ? 'type-h3' : 'type-h4'">
      <RouterLink :to="`/notices/${notice.id}`" class="transition-colors hover:text-accent">
        {{ notice.title }}
      </RouterLink>
    </h3>

    <template v-if="isFeatured">
      <p v-if="notice.summary" class="type-body mt-3 max-w-xl text-muted">{{ notice.summary }}</p>
      <RouterLink
        :to="`/notices/${notice.id}`"
        class="group type-ui mt-1 -mb-3 inline-flex gap-2.5 py-3 text-accent"
      >
        <span class="underline-offset-4 group-hover:underline">Ler notícia</span>
        <span
          class="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
          aria-hidden="true"
          >→</span
        >
      </RouterLink>
    </template>
  </li>
</template>

<style scoped>
.item {
  --marker: calc(15px * var(--type-scale, 1));
}

/* Line to the next item. */
.item:not(:last-child)::before {
  position: absolute;
  top: 0.5rem;
  bottom: -0.5rem;
  left: calc(var(--marker) / 2);
  width: 1px;
  background: rgb(255 255 255 / 0.14);
  content: '';
}

.marker {
  position: absolute;
  /* Centered on the line of the date. */
  top: calc((0.6875rem * var(--type-scale, 1) * var(--text-scale) * 1.5 - var(--marker)) / 2);
  left: 0;
  width: var(--marker);
  height: var(--marker);
  background: var(--color-ink);
  border: 2px solid var(--color);
  border-radius: 50%;
}

.marker.filled {
  background: var(--color);
}

.category {
  color: var(--color);
}
</style>
