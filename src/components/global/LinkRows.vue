<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  rows: { label: string; to: string; tag?: string; color?: string }[]
}>()
</script>

<template>
  <section aria-labelledby="link-rows" class="border-t border-white/8 pt-12 md:pt-16">
    <h2 id="link-rows" class="type-h3">{{ title }}</h2>
    <ul class="mt-6">
      <li v-for="row in rows" :key="row.to" class="border-b border-white/8">
        <RouterLink :to="row.to" class="group flex items-center justify-between gap-6 py-6">
          <span class="type-h4 transition-colors group-hover:text-accent">{{ row.label }}</span>
          <span class="flex items-center gap-6">
            <span v-if="row.tag" class="type-label" :style="{ color: row.color }">{{
              row.tag
            }}</span>
            <span
              class="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
              >→</span
            >
          </span>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
