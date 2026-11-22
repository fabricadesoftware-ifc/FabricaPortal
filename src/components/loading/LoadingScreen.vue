<script setup lang="ts">
import { computed } from 'vue'
import { useScrollLock } from '@/composables/useScrollLock'
import PressMachine from './PressMachine.vue'

const props = defineProps<{
  /** From 0 to 1. */
  progress: number
}>()

const messages = [
  'Subindo o Fabroku…',
  'Ligando o Painel…',
  'Conferindo o Transparência…',
  'Regando as Águas…',
  'Preparando o Histologia…',
]

const percentage = computed(() => Math.round(props.progress * 100))
const message = computed(
  () => messages[Math.min(messages.length - 1, Math.floor(props.progress * messages.length))],
)

useScrollLock()
</script>

<template>
  <div class="fixed inset-0 z-100 grid place-items-center overflow-hidden bg-ink px-6">
    <div class="flex w-full max-w-140 flex-col items-center">
      <PressMachine class="w-full" />

      <p
        class="mt-8 text-center text-xs font-extrabold tracking-[0.12em] uppercase sm:text-sm sm:tracking-[0.2em]"
      >
        Entrando na Fábrica…
      </p>

      <div
        role="progressbar"
        aria-label="Carregando"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-valuenow="percentage"
        class="mt-4 h-0.5 w-40 overflow-hidden rounded-full bg-white/10"
      >
        <div
          class="h-full origin-left bg-brand-orange"
          :style="{ transform: `scaleX(${progress})` }"
        />
      </div>

      <p class="mt-3 font-mono text-[11px] text-white/55" aria-hidden="true">
        {{ message }} <span class="text-white/25">·</span>
        <span class="ml-1 inline-block w-[4ch] text-right font-bold text-white"
          >{{ percentage }}%</span
        >
      </p>
    </div>
  </div>
</template>
