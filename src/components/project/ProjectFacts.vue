<script setup lang="ts">
import { computed } from 'vue'
import FactList from '@/components/global/FactList.vue'
import { projectStatuses } from '@/constants/portfolio'
import type { PortfolioProject, Team } from '@/types/project'
import { summarizeTeam } from '@/utils/summarizeTeam'

const props = defineProps<{
  project: PortfolioProject
  /** Undefined while loading or when the API is unavailable. */
  team?: Team
  /** Share of the issues that are closed. Null when it is unknown. */
  percentage: number | null
}>()

const MAX_TECHNOLOGIES = 3

const facts = computed(() => [
  { label: 'Área', value: props.project.category },
  { label: 'Equipe', value: props.team && summarizeTeam(props.team) },
  { label: 'Stack', value: props.project.technologies.slice(0, MAX_TECHNOLOGIES).join(' · ') },
  // The issues only tell the progress of what is being built.
  props.project.status === 'active' && props.percentage !== null
    ? { label: 'Progresso', value: `${props.percentage}%`, isHighlighted: true }
    : { label: 'Situação', value: projectStatuses[props.project.status].label },
])
</script>

<template>
  <!-- The progress is orange in every project. -->
  <FactList :facts="facts" class="[--color:var(--color-brand-orange)]" />
</template>
