<script setup lang="ts">
import { useLastCommit } from '@/composables/useLastCommit'

const lastCommit = useLastCommit()
</script>

<template>
  <p v-if="lastCommit" class="flex items-center gap-2 font-mono text-xs text-white/70">
    <span class="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
    <span>
      último commit {{ lastCommit.ago }} ·
      <strong class="font-bold text-white">{{ lastCommit.project }}</strong>
    </span>
  </p>
</template>
