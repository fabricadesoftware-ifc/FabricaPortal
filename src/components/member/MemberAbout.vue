<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import AppIcon, { type IconName } from '@/components/global/AppIcon.vue'
import { memberRoles } from '@/constants/members'
import type { Member } from '@/types/member'
import type { PortfolioProject } from '@/types/project'
import { describeMember } from '@/utils/describeMember'
import { slugify } from '@/utils/slugify'

const props = defineProps<{
  member: Member
  projects: PortfolioProject[]
  /** Teachers of the same projects. */
  teachers: Member[]
}>()

const text = computed(() => props.member.biography ?? describeMember(props.member, props.projects))

/** Only the ones registered on the API. */
const links = computed(() => {
  const { github, linkedin } = props.member
  const list: { label: string; href: string; icon: IconName }[] = []

  if (github) list.push({ label: 'GitHub', href: `https://github.com/${github}`, icon: 'github' })
  if (linkedin) list.push({ label: 'LinkedIn', href: linkedin, icon: 'linkedin' })
  return list
})
</script>

<template>
  <div>
    <p class="type-body max-w-3xl break-words whitespace-pre-line text-muted">{{ text }}</p>

    <ul v-if="links.length || teachers.length" class="mt-6 flex flex-wrap gap-2.5">
      <li v-for="link in links" :key="link.icon">
        <a :href="link.href" target="_blank" rel="noopener" class="link">
          <AppIcon :name="link.icon" class="size-4 shrink-0" />
          {{ link.label }} <span aria-hidden="true">↗</span>
        </a>
      </li>
      <li v-for="teacher in teachers" :key="teacher.name">
        <RouterLink :to="`/members/${slugify(teacher.name)}`" class="link">
          <span :style="{ color: memberRoles.teacher.color }">{{
            memberRoles.teacher.singular
          }}</span>
          {{ teacher.name }} <span aria-hidden="true">→</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@reference '@/assets/main.css';

.link {
  @apply type-small inline-flex items-center gap-2 rounded-lg border border-white/12 px-3.5 py-2 transition-colors hover:border-white/25 hover:bg-white/5;
}
</style>
