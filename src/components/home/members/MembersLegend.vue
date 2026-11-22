<script setup lang="ts">
import { memberRoles } from '@/constants/members'
</script>

<template>
  <ul class="flex flex-wrap gap-x-6 gap-y-2">
    <li
      v-for="(role, key) in memberRoles"
      :key="key"
      class="type-label flex items-center gap-2 text-muted"
    >
      <span
        class="size-2 rounded-full 2xl:size-2.5"
        :style="{ background: role.color }"
        aria-hidden="true"
      />
      {{ role.label }}
    </li>
  </ul>
</template>
