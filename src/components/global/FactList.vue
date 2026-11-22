<script setup lang="ts">
defineProps<{
  /** Four of them. The ones without a value show a dash. */
  facts: { label: string; value?: string; isHighlighted?: boolean }[]
}>()
</script>

<template>
  <dl class="grid grid-cols-2 border-y border-white/8 xl:grid-cols-4">
    <div
      v-for="fact in facts"
      :key="fact.label"
      class="min-w-0 border-white/8 py-5 pr-3 pl-4 odd:border-r odd:pl-0 nth-1:border-b nth-2:border-b sm:pr-6 sm:pl-6 sm:odd:pl-0 xl:border-b-0! xl:not-last:border-r xl:nth-3:pl-6!"
    >
      <dt class="type-label text-subtle">{{ fact.label }}</dt>
      <dd class="type-h4 mt-1.5" :class="{ 'text-(--color)': fact.isHighlighted }">
        {{ fact.value || '—' }}
      </dd>
    </div>
  </dl>
</template>
