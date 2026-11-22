<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useTabList } from '@/composables/useTabList'

const props = defineProps<{
  steps: string[]
  /** Id of the element that shows the content of the active step. */
  panelId: string
  /** Seconds the active step stays on screen. Null when it does not advance by itself. */
  duration: number | null
}>()

const active = defineModel<number>({ required: true })

const list = useTemplateRef('list')
const { select, onKeydown } = useTabList(list, active, () => props.steps.length)
</script>

<template>
  <div>
    <div
      ref="list"
      role="tablist"
      aria-label="Etapas do processo"
      class="grid grid-cols-4 [--dot:2.25rem] md:[--dot:2.5rem] xl:[--dot:3rem]"
      @keydown="onKeydown"
    >
      <div v-for="(step, index) in steps" :key="step" class="relative" role="presentation">
        <!-- Line to the next step. -->
        <span v-if="index < steps.length - 1" class="line bg-white/12" aria-hidden="true">
          <span
            :key="`${active}-${duration}`"
            class="block h-full origin-left bg-brand-orange"
            :class="{
              'scale-x-0': index > active || (index === active && duration === null),
              fill: index === active && duration !== null,
            }"
            :style="{ '--duration': `${duration}s` }"
          />
        </span>

        <button
          type="button"
          role="tab"
          :aria-selected="index === active"
          :aria-controls="panelId"
          :tabindex="index === active ? 0 : -1"
          class="group relative flex w-full cursor-pointer flex-col items-center rounded-lg"
          @click="select(index)"
        >
          <span
            class="grid size-(--dot) place-items-center rounded-full border bg-surface transition-colors"
            :class="
              index <= active
                ? 'border-brand-orange'
                : 'border-white/20 group-hover:border-white/45'
            "
          >
            <span
              class="size-3 rounded-full xl:size-3.5 transition-colors"
              :class="index <= active ? 'bg-brand-orange' : 'bg-white/20'"
            />
          </span>
          <span
            class="type-label mt-3 transition-colors"
            :class="index === active ? 'text-brand-orange' : 'text-subtle'"
            >{{ String(index + 1).padStart(2, '0') }}</span
          >
          <span
            class="type-h4 mt-1 transition-colors max-md:sr-only max-lg:text-[length:calc(1rem*var(--text-scale))]/6"
            :class="index === active ? 'text-white' : 'text-subtle group-hover:text-white'"
            >{{ step }}</span
          >
        </button>
      </div>
    </div>

    <!-- Small screens have no room for every name. -->
    <p class="type-h4 mt-2 text-center md:hidden" aria-hidden="true">
      {{ steps[active] }}
    </p>
  </div>
</template>

<style scoped>
.line {
  position: absolute;
  top: calc(var(--dot) / 2);
  left: 50%;
  width: 100%;
  height: 1px;
}

.fill {
  animation: fill var(--duration) linear backwards;
  animation-play-state: var(--timer-state, running);
}

@keyframes fill {
  from {
    transform: scaleX(0);
  }
}
</style>
