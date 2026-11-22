<script setup lang="ts">
import { computed } from 'vue'
import BaseBreadcrumb from '@/components/global/BaseBreadcrumb.vue'
import BaseTag from '@/components/global/BaseTag.vue'
import { memberRoles } from '@/constants/members'
import type { Member } from '@/types/member'
import { getInitials } from '@/utils/getInitials'
import { splitName } from '@/utils/splitName'

const props = defineProps<{ member: Member }>()

const links = [
  { label: 'Início', to: '/' },
  { label: 'Membros', to: '/members' },
]

const name = computed(() => splitName(props.member.name))
</script>

<template>
  <header>
    <BaseBreadcrumb :links="links" :current="member.name" />
    <div class="mt-6 flex items-center gap-4 md:gap-6">
      <!-- Always the initials: photos of underage students cannot be published (ECA). -->
      <span
        class="type-h3 grid size-16 shrink-0 place-items-center rounded-full bg-(--color) text-white md:size-20"
        aria-hidden="true"
        >{{ getInitials(member.name) }}</span
      >
      <div>
        <h1 class="type-h2">
          {{ name[0] }} <span class="text-(--color)">{{ name[1] }}</span>
        </h1>
        <ul class="mt-3 flex flex-wrap gap-2" aria-label="Vínculo e campus">
          <li>
            <BaseTag class="border-(--color)! bg-(--color)/15">{{
              memberRoles[member.role].singular
            }}</BaseTag>
          </li>
          <li><BaseTag>IFC Araquari</BaseTag></li>
        </ul>
      </div>
    </div>
  </header>
</template>
