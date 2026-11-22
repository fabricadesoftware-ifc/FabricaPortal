<script setup lang="ts">
import { definePage } from 'vue-router/experimental'
import PageHeading from '@/components/global/PageHeading.vue'
import MembersRail from '@/components/members/MembersRail.vue'
import MembersToolbar from '@/components/members/MembersToolbar.vue'
import { useMemberFilters } from '@/composables/useMemberFilters'
import { useMembers } from '@/composables/useMembers'
import { usePageTitle } from '@/composables/usePageTitle'

definePage({ name: 'members', path: '/members' })

usePageTitle('Membros')

const { members, hiddenCount } = useMembers()
const { search, role, matches } = useMemberFilters(members)
</script>

<template>
  <main class="section pt-32 md:pt-40">
    <div
      class="flex flex-col gap-8 border-b border-white/8 pb-10 2xl:flex-row 2xl:items-end 2xl:justify-between"
    >
      <PageHeading class="shrink-0" description="Docentes que orientam e alunos que constroem.">
        Nossos <span class="text-brand-orange">membros</span>
      </PageHeading>
      <MembersToolbar v-model:search="search" v-model:role="role" :members="members" />
    </div>

    <!-- The minimum height keeps the footer from jumping while the members load. -->
    <div class="mt-10 min-h-120">
      <MembersRail
        v-if="members.length"
        :members="members"
        :matches="matches"
        :hidden-count="hiddenCount"
      />
    </div>
  </main>
</template>
