<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { memberRoles } from '@/constants/members'
import type { Member } from '@/types/member'
import { slugify } from '@/utils/slugify'

defineProps<{ members: Member[] }>()
</script>

<template>
  <ul class="flex flex-wrap gap-2.5">
    <li v-for="member in members" :key="member.name">
      <RouterLink
        :to="`/members/${slugify(member.name)}`"
        class="type-ui flex items-center gap-3 rounded-lg border border-white/12 bg-surface px-4 py-2.5 transition-colors hover:border-white/25"
      >
        <span
          class="size-2 rounded-full"
          :style="{ background: memberRoles[member.role].color }"
          aria-hidden="true"
        />
        {{ member.name }}
        <span class="text-subtle">{{ memberRoles[member.role].singular }}</span>
      </RouterLink>
    </li>
  </ul>
</template>
