<script setup lang="ts">
import BaseButton from '@/components/global/BaseButton.vue'
import BaseTag from '@/components/global/BaseTag.vue'
import type { FeaturedProject } from '@/types/project'

defineProps<{
  project: FeaturedProject
  /** Position among the featured projects, starting at 1. */
  position: number
}>()
</script>

<template>
  <article
    class="flex flex-col items-start rounded-3xl border border-white/8 bg-surface p-7 md:p-10"
  >
    <p class="type-eyebrow flex items-center gap-3 text-brand-orange">
      <span
        class="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-orange font-bold xl:size-10 tracking-normal text-white"
        aria-hidden="true"
        >{{ project.name.charAt(0) }}</span
      >
      [{{ String(position).padStart(2, '0') }}] {{ project.name }}
    </p>

    <h3 class="type-h3 mt-7">
      {{ project.title }}
    </h3>
    <p class="type-body mt-4 text-muted">{{ project.description }}</p>

    <ul class="mt-6 mb-8 flex flex-wrap gap-2" aria-label="Tecnologias">
      <li v-for="technology in project.technologies" :key="technology">
        <BaseTag>{{ technology }}</BaseTag>
      </li>
    </ul>

    <BaseButton :href="project.href" class="mt-auto">Ver projeto</BaseButton>
  </article>
</template>
