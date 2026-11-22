<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  /** Address that was not found. */
  path: string
}>()

const MAX_PATH_LENGTH = 26

const command = computed(() => {
  const { path } = props
  const shortPath = path.length > MAX_PATH_LENGTH ? `${path.slice(0, MAX_PATH_LENGTH - 1)}…` : path

  return `fabrica abrir ${shortPath}`
})
</script>

<template>
  <div
    class="overflow-hidden rounded-xl border border-white/10 bg-surface font-mono text-xs xl:text-[13px]"
    aria-hidden="true"
  >
    <div class="flex items-center gap-2 border-b border-white/8 px-4 py-3">
      <span class="size-2.5 rounded-full bg-[#e5534b]" />
      <span class="size-2.5 rounded-full bg-[#e0a32e]" />
      <span class="size-2.5 rounded-full bg-[#3fb950]" />
      <span class="ml-1.5 text-[11px] text-white/50">terminal</span>
    </div>

    <!-- The key restarts the typing when another address is not found. -->
    <div :key="command" class="space-y-2.5 p-5">
      <p>
        <span class="prompt">fabrica ~ $</span>&nbsp;<span
          class="typed"
          :style="{ '--length': command.length }"
          >{{ command }}</span
        >
      </p>
      <p class="output text-[#ff6b61] [--delay:1.5s]">
        <span class="text-brand-red">✗</span> erro 404: rota não encontrada
      </p>
      <p class="output text-white/55 [--delay:1.8s]">→ dica: tente outra rota</p>
      <p class="output [--delay:2.1s]">
        <span class="prompt">fabrica ~ $</span>&nbsp;<span class="cursor" />
      </p>
    </div>
  </div>
</template>

<style scoped>
.prompt {
  font-weight: 700;
  color: var(--color-brand-orange);
}

.typed {
  display: inline-block;
  overflow: hidden;
  width: calc(var(--length) * 1ch);
  max-width: 100%;
  white-space: nowrap;
  vertical-align: bottom;
  animation: type 0.9s 0.4s steps(var(--length)) backwards;
}

.output {
  animation: appear 0.01s var(--delay) backwards;
}

.cursor {
  display: inline-block;
  width: 0.6em;
  height: 1.1em;
  vertical-align: text-bottom;
  background: #fff;
  animation: blink 1.1s step-end infinite;
}

/* Waits for the loading screen to leave. */
[inert] .typed,
[inert] .output {
  animation-play-state: paused;
}

@keyframes type {
  from {
    width: 0;
  }
}

@keyframes appear {
  from {
    opacity: 0;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .typed,
  .output,
  .cursor {
    animation: none;
  }
}
</style>
