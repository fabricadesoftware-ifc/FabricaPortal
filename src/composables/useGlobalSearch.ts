import { computed, ref, type Ref } from 'vue'
import { featuredMembers, memberRoles } from '@/constants/members'
import { latestNotices } from '@/constants/notices'
import { portfolioProjects } from '@/constants/portfolio'
import type { Member } from '@/types/member'
import type { Notice } from '@/types/notice'
import type { PortfolioProject } from '@/types/project'
import { getProjectSlug } from '@/utils/getProjectSlug'
import { loadMembers } from '@/utils/loadMembers'
import { loadNotices } from '@/utils/loadNotices'
import { loadProjects } from '@/utils/loadProjects'
import { normalizeText } from '@/utils/normalizeText'
import { slugify } from '@/utils/slugify'

export interface SearchResult {
  key: string
  label: string
  detail: string
  to: string
}

export interface SearchGroup {
  label: string
  color: string
  results: SearchResult[]
}

/** Each group shows at most this many results. */
const LIMIT = 5

// Shared by every search, and loaded only once.
const projects = ref<PortfolioProject[]>(portfolioProjects)
const members = ref<Member[]>(featuredMembers)
const notices = ref<Notice[]>(latestNotices)
let loading: Promise<unknown> | undefined

/** Loads from the API the first time, keeping the lists of the site when it fails. */
function load() {
  loading ??= Promise.allSettled([
    loadProjects().then((value) => (projects.value = value)),
    loadMembers().then((value) => (members.value = value)),
    loadNotices().then((value) => (notices.value = value)),
  ])
  return loading
}

const formatDate = (date: string) => date.split('-').reverse().join('/')

/** Projects, members and notices whose name has the query. Empty query shows the first ones. */
export function useGlobalSearch(query: Ref<string>) {
  const matches = (text: string) => normalizeText(text).includes(normalizeText(query.value))

  const groups = computed<SearchGroup[]>(() =>
    [
      {
        label: 'Projetos',
        color: 'var(--color-brand-orange)',
        results: projects.value
          .filter((project) => matches(project.name))
          .map((project) => ({
            key: `project-${project.name}`,
            label: project.name,
            detail: project.category ?? '',
            to: `/projects/${getProjectSlug(project)}`,
          })),
      },
      {
        label: 'Membros',
        color: memberRoles.student.color,
        results: members.value
          .filter((member) => matches(member.name))
          .map((member) => ({
            key: `member-${member.name}`,
            label: member.name,
            detail: memberRoles[member.role].singular,
            to: `/members/${slugify(member.name)}`,
          })),
      },
      {
        label: 'Notícias',
        color: 'var(--color-brand-teal)',
        results: notices.value
          .filter((notice) => matches(notice.title))
          .map((notice) => ({
            key: `notice-${notice.id}`,
            label: notice.title,
            detail: formatDate(notice.date),
            to: `/notices/${notice.id}`,
          })),
      },
    ]
      .map((group) => ({ ...group, results: group.results.slice(0, LIMIT) }))
      .filter((group) => group.results.length),
  )

  const results = computed(() => groups.value.flatMap((group) => group.results))

  return { groups, results, load }
}
