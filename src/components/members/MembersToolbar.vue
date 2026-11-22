<script setup lang="ts">
import { computed } from 'vue'
import FilterChip from '@/components/global/FilterChip.vue'
import SearchInput from '@/components/global/SearchInput.vue'
import { memberRoles } from '@/constants/members'
import type { Member, MemberRole } from '@/types/member'

const props = defineProps<{ members: Member[] }>()

const search = defineModel<string>('search', { required: true })
const role = defineModel<MemberRole | null>('role', { required: true })

/** Roles without members on the page are not offered. */
const roles = computed(() => [...new Set(props.members.map((member) => member.role))])
</script>

<template>
  <div class="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center">
    <SearchInput v-model="search" label="Buscar membro" class="lg:w-72" />

    <div role="group" aria-label="Vínculo" class="flex flex-wrap gap-1 lg:shrink-0 lg:flex-nowrap">
      <FilterChip
        label="Todos"
        color="#fff"
        variant="plain"
        :is-active="role === null"
        @click="role = null"
      />
      <FilterChip
        v-for="key in roles"
        :key="key"
        :label="memberRoles[key].label"
        :color="memberRoles[key].color"
        variant="plain"
        :is-active="role === key"
        @click="role = key"
      />
    </div>
  </div>
</template>
