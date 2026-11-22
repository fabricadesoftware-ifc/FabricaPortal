<script setup lang="ts">
import { computed } from 'vue'
import MemberAvatar from '@/components/global/MemberAvatar.vue'
import type { Team } from '@/types/project'
import { summarizeTeam } from '@/utils/summarizeTeam'

const props = defineProps<{
  /** Undefined while loading or when the API is unavailable. */
  team?: Team
}>()

const MAX_AVATARS = 4

const total = computed(() => (props.team ? props.team.teachers + props.team.students : MAX_AVATARS))
const avatarCount = computed(() => Math.min(total.value, MAX_AVATARS))
const hiddenCount = computed(() => total.value - avatarCount.value)

const summary = computed(() =>
  props.team ? summarizeTeam(props.team) : 'Docentes e discentes do IFC',
)
</script>

<template>
  <div
    class="relative isolate flex min-h-44 flex-col justify-end overflow-hidden rounded-3xl bg-brand-orange p-7 text-white md:p-10"
  >
    <span class="code" aria-hidden="true">&lt;/&gt;</span>

    <ul class="flex" aria-hidden="true">
      <li
        v-for="avatar in avatarCount"
        :key="avatar"
        class="rounded-full border-2 border-brand-orange not-first:-ml-3"
      >
        <MemberAvatar />
      </li>
      <li v-if="hiddenCount" class="-ml-3 rounded-full border-2 border-brand-orange">
        <span class="grid size-11 place-items-center rounded-full type-ui bg-on-orange text-white"
          >+{{ hiddenCount }}</span
        >
      </li>
    </ul>
    <h4 class="type-h4 mt-3">Equipe do projeto</h4>
    <p class="type-label mt-1">{{ summary }}</p>
  </div>
</template>

<style scoped>
.code {
  position: absolute;
  top: -0.18em;
  right: -0.06em;
  z-index: -1;
  font: 800 clamp(8rem, 13vw, 13rem) / 1 var(--font-mono);
  letter-spacing: -0.08em;
  color: rgb(0 0 0 / 0.11);
  font-variant-ligatures: none;
}
</style>
