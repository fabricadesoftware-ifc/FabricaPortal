<script setup lang="ts">
import ArrowButton from '@/components/global/ArrowButton.vue'
import { padNumber } from '@/utils/padNumber'

defineProps<{
  /** Every project of the carousel, in order. */
  names: string[]
}>()

const active = defineModel<number>({ required: true })
</script>

<template>
  <div class="flex flex-col items-center gap-3">
    <div class="flex items-center justify-center gap-4">
      <ArrowButton
        direction="previous"
        label="Projeto anterior"
        :is-disabled="active === 0"
        @click="active--"
      />

      <p class="w-32 text-center min-[24rem]:w-44 md:w-56" aria-live="polite">
        <span class="type-label block text-muted"
          >{{ padNumber(active + 1) }} / {{ padNumber(names.length) }}</span
        >
        <span class="type-h4 text-brand-orange">{{ names[active] }}</span>
      </p>

      <ArrowButton
        direction="next"
        label="Próximo projeto"
        :is-disabled="active === names.length - 1"
        @click="active++"
      />
    </div>

    <ul class="flex items-center">
      <li v-for="(name, index) in names" :key="name">
        <button
          type="button"
          :aria-label="`Mostrar ${name}`"
          :aria-current="index === active"
          class="group grid h-11 min-w-6 cursor-pointer place-items-center px-2"
          @click="active = index"
        >
          <span
            class="h-1.5 rounded-full transition-all motion-reduce:transition-none"
            :class="
              index === active ? 'w-7 bg-brand-orange' : 'w-1.5 bg-white/20 group-hover:bg-white/45'
            "
          />
        </button>
      </li>
    </ul>
  </div>
</template>
