<script setup lang="ts">
const { delay = 0 } = defineProps<{
  text: string
  /** Seconds before it starts. */
  delay?: number
  /** Seconds it takes to type everything. */
  duration: number
}>()
</script>

<template>
  <span
    class="typed"
    :style="{ '--length': text.length, '--delay': `${delay}s`, '--duration': `${duration}s` }"
    >{{ text }}</span
  >
</template>

<style scoped>
/* Set --play-state on any parent to pause. Needs a monospaced font. */
.typed {
  display: inline-block;
  overflow: hidden;
  width: calc(var(--length) * 1ch);
  max-width: 100%;
  vertical-align: bottom;
  white-space: nowrap;
  animation: type var(--duration) var(--delay) steps(var(--length)) backwards;
  animation-play-state: var(--play-state, running);
}

@keyframes type {
  from {
    width: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .typed {
    animation: none;
  }
}
</style>
