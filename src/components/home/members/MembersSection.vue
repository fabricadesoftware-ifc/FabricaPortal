<script setup lang="ts">
import SplitSection from '@/components/global/SplitSection.vue'
import { useFeaturedMembers } from '@/composables/useFeaturedMembers'
import MemberPill from './MemberPill.vue'
import MembersLegend from './MembersLegend.vue'

const { members, hiddenCount } = useFeaturedMembers()
</script>

<template>
  <SplitSection
    eyebrow="Membros"
    description="Docentes, discentes e egressos que constroem os projetos do laboratório."
    to="/members"
    action="Ver todos os membros"
  >
    <template #title>Quem faz a <span class="text-brand-orange">Fábrica</span></template>

    <ul class="flex flex-wrap gap-2.5 2xl:gap-3">
      <li v-for="member in members" :key="member.name">
        <MemberPill :member="member" />
      </li>
      <li
        v-if="hiddenCount > 0"
        class="type-ui rounded-lg border border-white/8 bg-surface px-4 py-3 text-subtle 2xl:px-5 2xl:py-3.5"
      >
        +{{ hiddenCount }} {{ hiddenCount === 1 ? 'pessoa' : 'pessoas' }}
      </li>
    </ul>
    <MembersLegend class="mt-8" />
  </SplitSection>
</template>
