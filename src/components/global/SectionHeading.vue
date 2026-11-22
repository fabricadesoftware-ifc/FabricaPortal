<script setup lang="ts">
defineProps<{ eyebrow: string }>()
</script>

<template>
  <div>
    <p class="type-eyebrow text-muted">
      <span class="text-brand-orange" aria-hidden="true">&lt;&nbsp;</span>{{ eyebrow
      }}<span class="text-brand-orange" aria-hidden="true">&nbsp;/&gt;</span>
    </p>
    <h2 class="type-h2 mt-4">
      <slot />
    </h2>
  </div>
</template>
