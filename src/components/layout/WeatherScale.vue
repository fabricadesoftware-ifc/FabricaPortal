<script setup lang="ts">
import { computed } from 'vue'

export interface ScaleLevel {
  /** Highest value of the level, included. */
  upTo: number
  label: string
  color: string
}

const props = defineProps<{
  title: string
  /** From the best to the worst. The last one ends the bar. */
  levels: ScaleLevel[]
  value: number | null
  /** Short name of the unit, before the value, as in "IQA". */
  unit: string
}>()

const end = computed(() => props.levels.at(-1)?.upTo ?? 1)

/** Segments of the bar, as wide as their part of the scale. */
const segments = computed(() =>
  props.levels.map(({ upTo, color }, index) => ({
    color,
    width: (upTo - (props.levels[index - 1]?.upTo ?? 0)) / end.value,
  })),
)

const level = computed(() => {
  const { value, levels } = props
  if (value == null) return null

  const found = levels.find(({ upTo }) => value <= upTo) ?? levels.at(-1)
  // Worse values than the scale stay at the end of the bar.
  return found && { ...found, position: Math.min(1, Math.max(0, value / end.value)) }
})
</script>

<template>
  <div>
    <div class="flex items-center justify-between gap-3">
      <p class="text-[0.6875rem] text-subtle">
        {{ title }}
        <span v-if="$slots.note" class="text-white/40"> · <slot name="note" /></span>
      </p>
      <p v-if="level" class="flex items-center gap-2">
        <span class="text-xs font-semibold" :style="{ color: level.color }">
          {{ level.label }}
        </span>
        <span class="type-label text-subtle tabular-nums">{{ unit }} {{ value }}</span>
      </p>
      <span v-else class="font-semibold">--</span>
    </div>
    <div class="relative mt-2.5 flex h-1 gap-0.5" aria-hidden="true">
      <span
        v-for="segment in segments"
        :key="segment.color"
        class="h-full rounded-full opacity-80"
        :style="{ flexGrow: segment.width, backgroundColor: segment.color }"
      />
      <span
        v-if="level"
        class="marker absolute top-1/2 size-2.5 -translate-1/2 rounded-full border-2 border-surface bg-white"
        :style="{ left: `${level.position * 100}%` }"
      />
    </div>
  </div>
</template>

<style scoped>
.marker {
  transition: left 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  animation: pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both;
}

@keyframes pop {
  from {
    opacity: 0;
    scale: 0.4;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marker {
    animation: none;
  }
}
</style>
