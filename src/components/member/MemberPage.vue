<script setup lang="ts">
import { computed } from 'vue'
import FactList from '@/components/global/FactList.vue'
import LinkRows from '@/components/global/LinkRows.vue'
import NumberedSection from '@/components/global/NumberedSection.vue'
import SectionNav from '@/components/global/SectionNav.vue'
import { useMemberActivity } from '@/composables/useMemberActivity'
import { memberRoles } from '@/constants/members'
import type { Member } from '@/types/member'
import type { PortfolioProject } from '@/types/project'
import { slugify } from '@/utils/slugify'
import MemberAbout from './MemberAbout.vue'
import MemberActivity from './MemberActivity.vue'
import MemberHeader from './MemberHeader.vue'
import MemberProjects from './MemberProjects.vue'
import MemberStudents from './MemberStudents.vue'

const props = defineProps<{
  member: Member
  /** Everyone, to find who works together. */
  members: Member[]
  /** The ones of the member. */
  projects: PortfolioProject[]
  others: Member[]
}>()

const isTeacher = props.member.role === 'teacher'
/** Only of current students, even if others have GitHub. */
const githubUser = props.member.role === 'student' ? props.member.github : undefined

const { activity, hasFailed } = useMemberActivity(githubUser)

const projectsOf = ({ id }: Member) =>
  props.projects.filter(({ memberIds }) => id !== undefined && memberIds?.includes(id))

const students = computed(() =>
  props.members
    .filter(({ role }) => role === 'student')
    .map((student) => ({ student, projects: projectsOf(student) }))
    .filter(({ projects }) => projects.length),
)
const teachers = computed(() =>
  isTeacher
    ? []
    : props.members.filter((member) => member.role === 'teacher' && projectsOf(member).length),
)

const facts = computed(() => [
  { label: 'Função', value: memberRoles[props.member.role].singular },
  { label: 'Campus', value: 'IFC Araquari' },
  { label: 'Projetos', value: props.projects.length ? String(props.projects.length) : undefined },
  isTeacher
    ? {
        label: 'Discentes nos projetos',
        value: students.value.length ? String(students.value.length) : undefined,
        isHighlighted: true,
      }
    : githubUser
      ? {
          label: 'Commits na Fábrica',
          value: activity.value && String(activity.value.commitCount),
          isHighlighted: true,
        }
      : {
          label: 'Situação',
          value: props.member.role === 'alumnus' ? 'Passou pela Fábrica' : 'Na Fábrica',
        },
])

// Only the sections that have something to show.
const sections = [
  { id: 'sobre', title: 'Sobre' },
  ...(isTeacher && students.value.length ? [{ id: 'orientacoes', title: 'Orientações' }] : []),
  ...(githubUser ? [{ id: 'atividade', title: 'Atividade no GitHub' }] : []),
  ...(props.projects.length ? [{ id: 'projetos', title: 'Projetos' }] : []),
]

const otherRows = computed(() =>
  props.others.map(({ name, role }) => ({
    label: name,
    to: `/members/${slugify(name)}`,
    tag: memberRoles[role].singular,
    color: memberRoles[role].color,
  })),
)
</script>

<template>
  <main class="section pt-32 md:pt-40" :style="{ '--color': memberRoles[member.role].color }">
    <MemberHeader :member="member" />
    <FactList :facts="facts" class="mt-10" />

    <div class="mt-12 grid gap-12 md:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-16">
      <SectionNav
        label="Seções do perfil"
        :sections="sections"
        class="self-start max-lg:hidden lg:sticky lg:top-32"
      />

      <div class="min-w-0 space-y-16 md:space-y-20">
        <NumberedSection
          v-for="(section, index) in sections"
          :id="section.id"
          :key="section.id"
          :title="section.title"
          :position="index + 1"
        >
          <MemberAbout
            v-if="section.id === 'sobre'"
            :member="member"
            :projects="projects"
            :teachers="teachers"
          />
          <MemberStudents
            v-else-if="section.id === 'orientacoes'"
            :students="students"
            :project-count="projects.length"
          />
          <MemberActivity
            v-else-if="section.id === 'atividade'"
            :activity="activity"
            :has-failed="hasFailed"
          />
          <MemberProjects v-else :projects="projects" />
        </NumberedSection>
      </div>
    </div>

    <LinkRows
      v-if="others.length"
      title="Outros integrantes"
      :rows="otherRows"
      class="mt-20 md:mt-28"
    />
  </main>
</template>
