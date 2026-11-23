<script setup lang="ts">
import { computed, nextTick, ref, useId, useTemplateRef, watch } from 'vue'
import AppIcon from '@/components/global/AppIcon.vue'
import WeatherIcon from '@/components/global/WeatherIcon.vue'
import { useClickOutside } from '@/composables/useClickOutside'
import { useScrollLock } from '@/composables/useScrollLock'
import { useWeather } from '@/composables/useWeather'
import { formatReading } from '@/utils/formatReading'
import { conditionLabel, getCondition, isDaytime } from '@/utils/weatherCondition'
import WeatherPanel from './WeatherPanel.vue'

const props = defineProps<{
  /** Small screens open the panel as a sheet from the bottom, instead of below the button. */
  isSheet?: boolean
}>()

/** Pixels the sheet must be dragged down to close. */
const CLOSE_DISTANCE = 90

const { weather } = useWeather()

const isOpen = ref(false)
const panelId = useId()
const root = useTemplateRef('root')
const toggle = useTemplateRef('toggle')
const panel = useTemplateRef('panel')

// The sheet has its own backdrop, and lives out of the button.
useClickOutside(root, () => {
  if (!props.isSheet) isOpen.value = false
})

useScrollLock(() => props.isSheet === true && isOpen.value)

// Keeps the keyboard and the screen readers out of the page behind the sheet.
const app = document.getElementById('app')
watch(
  () => props.isSheet && isOpen.value,
  async (isModal) => {
    if (app) app.inert = !!isModal
    if (!isModal) return
    await nextTick()
    panel.value?.focus({ preventScroll: true })
  },
)

async function close() {
  if (!isOpen.value) return
  isOpen.value = false
  await nextTick()
  toggle.value?.focus({ preventScroll: true })
}

/** Date of the reading, as in 22.11.2026. */
const todayText = computed(() =>
  new Date(weather.value?.updatedAt ?? Date.now()).toLocaleDateString('pt-BR').replaceAll('/', '.'),
)

const condition = computed(() => (weather.value ? getCondition(weather.value) : 'clear'))
const isDay = computed(() => isDaytime(new Date(weather.value?.updatedAt ?? Date.now())))

/* Dragging the handle of the sheet down closes it. */
const dragStart = ref<number | null>(null)
const dragDistance = ref(0)

function startDrag(event: PointerEvent) {
  dragStart.value = event.clientY
  ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
}

function drag(event: PointerEvent) {
  if (dragStart.value === null) return
  dragDistance.value = Math.max(0, event.clientY - dragStart.value)
}

function endDrag() {
  if (dragStart.value === null) return
  const shouldClose = dragDistance.value >= CLOSE_DISTANCE
  dragStart.value = null
  dragDistance.value = 0
  if (shouldClose) close()
}
</script>

<template>
  <div v-if="weather" ref="root" class="relative" @keydown.esc="close">
    <button
      ref="toggle"
      type="button"
      class="group flex cursor-pointer items-stretch rounded-lg border bg-surface text-left transition-[border-color,background-color,box-shadow,scale] duration-200 active:scale-[0.97] motion-reduce:transition-none"
      :class="[
        isSheet ? 'h-11' : 'h-[3.125rem]',
        isOpen
          ? 'border-white/25 bg-white/5'
          : 'border-white/8 hover:border-white/20 hover:bg-white/3 hover:shadow-[0_0_0.75rem_rgb(255_255_255/0.05)]',
      ]"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      :aria-haspopup="isSheet ? 'dialog' : undefined"
      aria-label="Estação meteorológica do IFC Araquari"
      @click="isOpen = !isOpen"
    >
      <span
        class="grid place-items-center border-r border-white/8"
        :class="isSheet ? 'px-2' : 'px-2.5'"
        :title="conditionLabel(condition)"
      >
        <WeatherIcon
          :condition="condition"
          :is-day="isDay"
          class="transition-[translate,scale] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-0.5 group-hover:scale-110 motion-reduce:transition-none"
          :class="isSheet ? 'size-7' : 'size-9'"
        />
      </span>
      <span class="flex items-center gap-3 pr-3 pl-2.5 xl:pr-3.5 xl:pl-3">
        <span
          class="leading-none font-semibold tracking-tight tabular-nums"
          :class="isSheet ? 'text-xl' : 'text-2xl'"
        >
          {{ formatReading(weather.temperature, 0, 0)
          }}<span class="align-top text-base font-normal text-muted">°</span>
        </span>
        <!-- Only wide screens have room for the place and the date. -->
        <span v-if="!isSheet" class="hidden items-center gap-3 xl:flex">
          <span class="flex flex-col leading-tight">
            <span class="text-[0.8125rem] font-semibold">Araquari</span>
            <span class="text-[0.6875rem] text-subtle tabular-nums">{{ todayText }}</span>
          </span>
          <AppIcon
            name="compass"
            class="ml-1 size-5 text-white/70 transition-[rotate,color] duration-700 ease-out group-hover:text-white"
            :style="{ rotate: `${(weather.windDirection ?? 45) - 45}deg` }"
          />
        </span>
      </span>
    </button>

    <Teleport to="body" :disabled="!isSheet">
      <Transition name="backdrop">
        <div
          v-if="isSheet && isOpen"
          class="fixed inset-0 z-60 bg-black/60 backdrop-blur-[2px]"
          aria-hidden="true"
          @click="close"
        />
      </Transition>

      <Transition :name="isSheet ? 'sheet' : 'popover'">
        <section
          v-if="isOpen"
          ref="panel"
          :id="panelId"
          tabindex="-1"
          :role="isSheet ? 'dialog' : undefined"
          :aria-modal="isSheet ? 'true' : undefined"
          :aria-labelledby="`${panelId}-title`"
          :class="
            isSheet
              ? 'sheet fixed inset-x-0 bottom-0 z-60 max-h-[90svh] overflow-y-auto overscroll-contain rounded-t-2xl border-t border-white/10 bg-surface pb-[env(safe-area-inset-bottom)] shadow-[0_-1rem_3rem_rgb(0_0_0/0.5)]'
              : 'popover absolute top-full right-0 mt-3 w-[calc(25rem*var(--text-scale))] overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/70'
          "
          :style="
            dragDistance ? { translate: `0 ${dragDistance}px`, transition: 'none' } : undefined
          "
          @keydown.esc="close"
        >
          <div
            v-if="isSheet"
            class="flex cursor-grab touch-none justify-center pt-3 pb-1 active:cursor-grabbing"
            aria-hidden="true"
            @pointerdown="startDrag"
            @pointermove="drag"
            @pointerup="endDrag"
            @pointercancel="endDrag"
          >
            <span class="h-1 w-10 rounded-full bg-white/20" />
          </div>
          <WeatherPanel :weather="weather" :title-id="`${panelId}-title`" @close="close" />
        </section>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.popover {
  transform-origin: top right;
}

/* Opens from the button: grows, slides and comes into focus. */
.popover-enter-active {
  transition:
    opacity 0.25s ease-out,
    scale 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    translate 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.3s ease-out;
}

.popover-leave-active {
  transition:
    opacity 0.15s ease-in,
    scale 0.15s ease-in,
    translate 0.15s ease-in;
}

.popover-enter-from {
  opacity: 0;
  scale: 0.92;
  translate: 0 -0.5rem;
  filter: blur(6px);
}

.popover-leave-to {
  opacity: 0;
  scale: 0.97;
  translate: 0 -0.25rem;
}

/* Rises from the bottom of the screen, and returns there when dragged or closed. */
.sheet {
  transition: translate 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.sheet-enter-active {
  transition: translate 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.sheet-leave-active {
  transition: translate 0.25s cubic-bezier(0.55, 0, 0.8, 0.4);
}

.sheet-enter-from,
.sheet-leave-to {
  translate: 0 100%;
}

.backdrop-enter-active {
  transition: opacity 0.3s ease-out;
}

.backdrop-leave-active {
  transition: opacity 0.25s ease-in;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .popover-enter-active,
  .popover-leave-active,
  .sheet-enter-active,
  .sheet-leave-active {
    transition: opacity 0.15s;
  }

  .popover-enter-from,
  .sheet-enter-from,
  .sheet-leave-to {
    opacity: 0;
    scale: 1;
    translate: none;
    filter: none;
  }
}
</style>
