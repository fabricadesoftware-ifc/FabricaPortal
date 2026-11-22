<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useSlidingHighlight } from '@/composables/useSlidingHighlight'
import { useTabList } from '@/composables/useTabList'

const {
  tabs,
  label,
  panelId,
  variant = 'solid',
} = defineProps<{
  tabs: string[]
  /** Describes the group to screen readers. */
  label: string
  /** Id of the element that shows the content of the active tab. */
  panelId: string
  variant?: 'solid' | 'underline'
}>()

const active = defineModel<number>({ required: true })

const variants = {
  solid: {
    root: 'w-fit max-w-full rounded-xl max-sm:w-full',
    list: 'gap-1 max-sm:gap-0 rounded-xl border border-white/8 bg-surface p-1',
    highlight: 'inset-y-1 rounded-lg bg-brand-orange',
    // As tall as a button, counting the padding of the list.
    tab: 'rounded-lg px-4 py-2.5 max-sm:px-1 md:px-5 lg:py-[calc(0.625rem*var(--type-scale,1)-0.25rem)]',
    active: 'text-white',
  },
  underline: {
    root: 'mx-auto w-full max-w-3xl border-b border-white/8 max-sm:-mx-4 max-sm:w-auto',
    list: 'mx-auto',
    highlight: 'inset-y-0 border-b-2 border-brand-orange bg-brand-orange/15',
    tab: 'px-5 py-4 max-sm:px-0.5 md:px-6',
    active: 'text-accent',
  },
}

const list = useTemplateRef('list')
const highlight = useSlidingHighlight(list, {
  selector: '[aria-selected="true"]',
  source: active,
})

const { select, onKeydown } = useTabList(list, active, () => tabs.length)
</script>

<template>
  <!-- Phones have smaller tabs, so all of them fit in the row. -->
  <div class="scrollbar-none overflow-x-auto" :class="variants[variant].root">
    <div
      ref="list"
      role="tablist"
      :aria-label="label"
      class="relative flex w-max max-sm:w-full"
      :class="variants[variant].list"
      @keydown="onKeydown"
    >
      <span
        v-if="highlight"
        class="absolute left-0 transition-[translate,width] duration-300 ease-out motion-reduce:transition-none"
        :class="variants[variant].highlight"
        :style="{ translate: `${highlight.left}px`, width: `${highlight.width}px` }"
        aria-hidden="true"
      />
      <button
        v-for="(tab, index) in tabs"
        :key="tab"
        type="button"
        role="tab"
        :aria-selected="index === active"
        :aria-controls="panelId"
        :tabindex="index === active ? 0 : -1"
        class="type-ui relative cursor-pointer whitespace-nowrap -outline-offset-2 transition-colors max-sm:flex-auto max-sm:text-[length:clamp(10.5px,3.2vw,13.3px)]"
        :class="[
          variants[variant].tab,
          index === active ? variants[variant].active : 'text-muted hover:text-white',
        ]"
        @click="select(index)"
      >
        {{ tab }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-none {
  scrollbar-width: none;
}
</style>
