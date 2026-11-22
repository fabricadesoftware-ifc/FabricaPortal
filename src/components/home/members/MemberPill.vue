<script setup lang="ts">
import { memberRoles } from '@/constants/members'
import type { FeaturedMember } from '@/types/member'

defineProps<{ member: FeaturedMember }>()
</script>

<template>
  <span
    class="type-ui flex items-center gap-3 rounded-lg border border-white/8 bg-surface px-4 py-3 2xl:px-5 2xl:py-3.5 text-white"
  >
    <span
      class="size-2 shrink-0 2xl:size-2.5 rounded-full"
      :style="{ background: memberRoles[member.role].color }"
      aria-hidden="true"
    />
    {{ member.name }}
  </span>
</template>
