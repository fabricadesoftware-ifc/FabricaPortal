<script setup lang="ts">
import BaseTag from '@/components/global/BaseTag.vue'
import TerminalWindow from '@/components/global/TerminalWindow.vue'
import TypedText from '@/components/global/TypedText.vue'
import type { ProcessStep } from '@/types/process'
import { scheduleCommands } from './schedule'

const props = defineProps<{
  step: ProcessStep
  /** Position among the steps, starting at 1. */
  position: number
}>()

const { commands, end } = scheduleCommands(props.step.commands)
</script>

<template>
  <TerminalWindow title="fabrica — zsh — 100×28">
    <div
      class="min-h-105 space-y-2 bg-[#0e0e10] p-4 text-[clamp(8px,2.6vw,11px)] leading-relaxed sm:text-xs md:p-8 md:text-[calc(0.875rem*var(--type-scale,1))]"
      aria-hidden="true"
    >
      <template v-for="command in commands" :key="command.input">
        <p class="line" :style="{ '--delay': `${command.start}s` }">
          <span class="prompt"><b>fabrica<span>@ifc</span>&nbsp;</b><i>~</i> <span>$</span></span
          >&nbsp;<TypedText
            :text="command.input"
            :delay="command.start"
            :duration="command.duration"
            class="font-bold text-white"
          />
        </p>
        <p class="line pl-4 text-muted" :style="{ '--delay': `${command.answer}s` }">
          <span class="text-[#3fb950]">✓</span> {{ command.output }}
        </p>
      </template>
      <p class="line" :style="{ '--delay': `${end}s` }">
        <span class="prompt"><b>fabrica<span>@ifc</span>&nbsp;</b><i>~</i> <span>$</span></span
        >&nbsp;<span class="cursor" />
      </p>
    </div>

    <div
      class="flex flex-col gap-4 border-t border-white/8 px-4 py-5 font-sans md:flex-row md:items-center md:justify-between md:px-8"
    >
      <h3 class="type-h4 flex items-center gap-3">
        <span class="type-label rounded-md bg-brand-orange px-2.5 py-1 text-on-orange">{{
          String(position).padStart(2, '0')
        }}</span>
        {{ step.summary }}
      </h3>
      <ul class="flex flex-wrap gap-2" aria-label="Áreas envolvidas">
        <li v-for="tag in step.tags" :key="tag">
          <BaseTag>{{ tag }}</BaseTag>
        </li>
      </ul>
    </div>
  </TerminalWindow>
</template>

<style scoped>
.prompt {
  font-weight: 700;
  color: #ff8533;
}

/* Leaves the width of small screens to the command. */
@media (width < 40rem) {
  .prompt b {
    display: none;
  }
}

.prompt span {
  color: rgb(255 255 255 / 0.55);
}

.prompt i {
  font-style: normal;
  color: var(--color-brand-teal);
}

.line {
  animation: appear 0.01s var(--delay) backwards;
  animation-play-state: var(--play-state, running);
}

.cursor {
  display: inline-block;
  width: 0.6em;
  height: 1.15em;
  vertical-align: text-bottom;
  background: #ff8533;
  animation: blink 1.1s step-end infinite;
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
  .line,
  .cursor {
    animation: none;
  }
}
</style>
