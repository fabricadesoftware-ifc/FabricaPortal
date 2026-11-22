<script setup lang="ts">
import { splitLinks } from '@/utils/splitLinks'

defineProps<{ text: string }>()
</script>

<template>
  <p class="type-body break-words whitespace-pre-line text-muted">
    <template v-for="(part, index) in splitLinks(text)" :key="index">
      <a
        v-if="part.isLink"
        :href="part.text"
        target="_blank"
        rel="noopener"
        class="text-accent underline-offset-4 hover:underline"
        >{{ part.text }}</a
      >
      <template v-else>{{ part.text }}</template>
    </template>
  </p>
</template>
