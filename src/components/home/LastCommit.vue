<script setup lang="ts">
import { useLastCommit } from '@/composables/useLastCommit'

const lastCommit = useLastCommit()
</script>

<template>
  <p
    v-if="lastCommit"
    class="type-code flex items-center gap-2 text-[length:calc(0.75rem*var(--text-scale))]/4 text-muted"
  >
    <span class="dot relative size-2 rounded-full bg-emerald-400" aria-hidden="true" />
    <span>
      último commit {{ lastCommit.ago }} ·
      <a
        :href="lastCommit.url"
        target="_blank"
        rel="noopener"
        class="font-bold text-white underline-offset-4 transition-colors hover:text-brand-orange hover:underline"
      >
        {{ lastCommit.project }}
      </a>
    </span>
  </p>
</template>

<style scoped>
/* Glows and pulses, like a live signal. */
.dot {
  box-shadow: 0 0 0.5rem rgb(52 211 153 / 0.8);
  animation: blink 1.6s ease-in-out infinite;
}

.dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: inherit;
  animation: ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0.45;
    box-shadow: 0 0 0.125rem rgb(52 211 153 / 0.4);
  }
}

@keyframes ping {
  75%,
  100% {
    opacity: 0;
    scale: 2.5;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dot,
  .dot::after {
    animation: none;
  }
}
</style>
