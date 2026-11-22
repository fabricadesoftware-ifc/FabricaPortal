<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useActiveSection } from '@/composables/useActiveSection'
import { padNumber } from '@/utils/padNumber'

const props = defineProps<{
  /** Describes the sections to screen readers. */
  label: string
  sections: { id: string; title: string }[]
}>()

const active = useActiveSection(props.sections.map(({ id }) => id))
</script>

<template>
  <nav :aria-label="label">
    <ol class="border-t border-white/8">
      <li v-for="(section, index) in sections" :key="section.id">
        <RouterLink
          :to="{ hash: `#${section.id}` }"
          replace
          :aria-current="section.id === active ? 'true' : undefined"
          class="type-ui flex items-baseline gap-4 border-b border-white/8 py-3 transition-colors"
          :class="section.id === active ? 'text-white' : 'text-subtle hover:text-white'"
        >
          <span
            class="type-label"
            :class="{ 'text-brand-orange': section.id === active }"
            aria-hidden="true"
            >{{ padNumber(index + 1) }}</span
          >
          {{ section.title }}
        </RouterLink>
      </li>
    </ol>
  </nav>
</template>
