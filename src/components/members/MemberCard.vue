<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { memberRoles } from '@/constants/members'
import type { Member } from '@/types/member'
import { padNumber } from '@/utils/padNumber'
import { slugify } from '@/utils/slugify'
import MemberPortrait from './MemberPortrait.vue'

defineProps<{
  member: Member
  /** Position among all the members, starting at 1. */
  position: number
}>()
</script>

<template>
  <article
    class="relative flex flex-col rounded-2xl border border-white/12 bg-surface p-3 transition-colors hover:border-white/30"
  >
    <MemberPortrait :name="member.name" :seed="position" />

    <div class="flex flex-1 flex-col px-1.5 pt-4 pb-1">
      <h3 class="type-h4 mb-3">
        <!-- The whole card is the link. -->
        <RouterLink
          :to="`/members/${slugify(member.name)}`"
          class="after:absolute after:inset-0 after:rounded-2xl"
        >
          {{ member.name }}
        </RouterLink>
      </h3>
      <p
        class="type-label mt-auto flex flex-wrap justify-between gap-x-3 border-t border-white/8 pt-3"
      >
        <span class="text-(--color)">{{ memberRoles[member.role].singular }}</span>
        <span class="text-subtle" aria-hidden="true">Nº {{ padNumber(position) }}</span>
      </p>
    </div>
  </article>
</template>
