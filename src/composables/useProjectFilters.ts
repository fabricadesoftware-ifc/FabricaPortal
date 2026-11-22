import { computed, ref, type Ref } from 'vue'
import { technologyFilters } from '@/constants/portfolio'
import type { PortfolioProject, ProjectCategory, ProjectStatus } from '@/types/project'
import { normalizeText } from '@/utils/normalizeText'

/** Filters of the projects page. A null category or status means all of them. */
export function useProjectFilters(projects: Readonly<Ref<PortfolioProject[]>>) {
  const search = ref('')
  const category = ref<ProjectCategory | null>(null)
  const status = ref<ProjectStatus | null>(null)
  const technologies = ref<string[]>([])

  const matchesSearch = ({ name, description, technologies }: PortfolioProject) =>
    normalizeText([name, description, ...technologies].join(' ')).includes(
      normalizeText(search.value),
    )

  /** Any of the chosen technologies of each group, such as (Vue or Django) and PostgreSQL. */
  const matchesTechnologies = (project: PortfolioProject) =>
    technologyFilters.every((group) => {
      const chosen = group.technologies.filter((name) => technologies.value.includes(name))
      return !chosen.length || chosen.some((name) => project.technologies.includes(name))
    })

  const matches = computed(() =>
    projects.value.filter(
      (project) =>
        (!category.value || project.category === category.value) &&
        (!status.value || project.status === status.value) &&
        matchesTechnologies(project) &&
        matchesSearch(project),
    ),
  )

  function clear() {
    search.value = ''
    category.value = null
    status.value = null
    technologies.value = []
  }

  return { search, category, status, technologies, matches, clear }
}
