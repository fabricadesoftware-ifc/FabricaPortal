<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import SectionHeading from './SectionHeading.vue'

defineProps<{
  eyebrow: string
  description: string
  /** Where the button leads. */
  to: string
  action: string
}>()
</script>

<template>
  <section
    class="section grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
  >
    <div>
      <SectionHeading :eyebrow="eyebrow">
        <slot name="title" />
      </SectionHeading>
      <p class="type-body mt-5 max-w-lg text-muted">{{ description }}</p>
      <BaseButton :to="to" variant="primary" class="mt-8">{{ action }}</BaseButton>
    </div>

    <div>
      <slot />
    </div>
  </section>
</template>
