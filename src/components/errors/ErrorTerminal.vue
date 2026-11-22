<script setup lang="ts">
import { computed } from 'vue'
import TerminalWindow from '@/components/global/TerminalWindow.vue'
import TypedText from '@/components/global/TypedText.vue'

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
  <TerminalWindow title="terminal" class="terminal text-xs xl:text-[13px]" aria-hidden="true">
    <!-- The key restarts the typing when another address is not found. -->
    <div :key="command" class="space-y-2.5 p-5">
      <p>
        <span class="prompt">fabrica ~ $</span>&nbsp;<TypedText
          :text="command"
          :delay="0.4"
          :duration="0.9"
        />
      </p>
      <p class="output text-[#ff6b61] [--delay:1.5s]">
        <span class="text-brand-red">✗</span> erro 404: rota não encontrada
      </p>
      <p class="output text-white/55 [--delay:1.8s]">→ dica: tente outra rota</p>
      <p class="output [--delay:2.1s]">
        <span class="prompt">fabrica ~ $</span>&nbsp;<span class="cursor" />
      </p>
    </div>
  </TerminalWindow>
</template>

<style scoped>
.prompt {
  font-weight: 700;
  color: var(--color-brand-orange);
}

.output {
  animation: appear 0.01s var(--delay) backwards;
  animation-play-state: var(--play-state, running);
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
[inert] .terminal {
  --play-state: paused;
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
  .output,
  .cursor {
    animation: none;
  }
}
</style>
