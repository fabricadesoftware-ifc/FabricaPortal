<script setup lang="ts">
import { computed, ref, useId, useTemplateRef } from 'vue'
import SectionHeading from '@/components/global/SectionHeading.vue'
import { useInView } from '@/composables/useInView'
import { processSteps } from '@/constants/processSteps'
import ProcessStepper from './ProcessStepper.vue'
import ProcessTerminal from './ProcessTerminal.vue'
import { scheduleCommands } from './schedule'

/** Seconds to read the finished terminal before the next step. */
const READING_TIME = 3.5

const names = processSteps.map(({ name }) => name)
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const active = ref(0)
const step = computed(() => processSteps[active.value]!)
const panelId = useId()

/** Advances by itself until someone chooses a step. */
const isAutomatic = ref(!reducedMotion)
const duration = computed(() =>
  isAutomatic.value ? scheduleCommands(step.value.commands).end + READING_TIME : null,
)

const card = useTemplateRef('card')
const isInView = useInView(card, 0.35)

function choose(index: number) {
  isAutomatic.value = false
  active.value = index
}

function advance() {
  active.value = (active.value + 1) % processSteps.length
}
</script>

<template>
  <section class="section">
    <div
      ref="card"
      class="card rounded-3xl border border-white/8 bg-surface/60 px-3 py-16 md:px-12 md:py-24"
      :class="{ 'is-paused': !isInView }"
    >
      <header class="flex flex-col items-center text-center">
        <SectionHeading eyebrow="Como funciona">
          Da ideia ao <span class="text-brand-orange">código em produção</span>
        </SectionHeading>
        <p class="type-body mt-5 text-muted">
          Em cada etapa, alunos e docentes qualificados na área.
        </p>
      </header>

      <div class="mx-auto mt-12 max-w-5xl 2xl:max-w-6xl">
        <ProcessStepper
          :model-value="active"
          :steps="names"
          :panel-id="panelId"
          :duration="duration"
          @update:model-value="choose"
        />

        <div :id="panelId" role="tabpanel" :aria-label="step.name" class="mt-10">
          <ProcessTerminal :key="active" :step="step" :position="active + 1" />
        </div>

        <!-- The end of this invisible animation moves to the next step. It pauses with the others. -->
        <span
          v-if="duration !== null"
          :key="active"
          class="timer"
          :style="{ '--duration': `${duration}s` }"
          aria-hidden="true"
          @animationend="advance"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Out of the screen, or behind a loading screen. */
.is-paused,
[inert] .card {
  --play-state: paused;
  --timer-state: paused;
}

/* Stays on the step while someone reads it. */
.card:hover {
  --timer-state: paused;
}

.timer {
  animation: wait var(--duration) linear;
  animation-play-state: var(--timer-state, running);
}

@keyframes wait {
  from {
    visibility: hidden;
  }
}
</style>
