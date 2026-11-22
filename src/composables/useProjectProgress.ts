import { computed, onMounted, ref } from 'vue'
import type { RepositoryProgress } from '@/types/github'
import type { Repository } from '@/types/project'
import { loadRepositoryProgress } from '@/utils/loadRepositoryProgress'

/** Issues and pull requests of the repositories of a project. */
export function useProjectProgress(repositories: Repository[]) {
  const status = ref<'loading' | 'ready' | 'failed'>('loading')
  /** In the order of the repositories. */
  const progress = ref<RepositoryProgress[]>([])

  const sum = (count: (item: RepositoryProgress) => number) =>
    progress.value.reduce((total, item) => total + count(item), 0)

  const issueCount = computed(() => sum(({ issues }) => issues.length))
  const closedCount = computed(() => sum((item) => item.closedCount))
  const mergedCount = computed(() => sum((item) => item.mergedCount))
  const percentage = computed(() =>
    issueCount.value ? Math.round((closedCount.value / issueCount.value) * 100) : null,
  )
  const lastActivity = computed(() =>
    progress.value
      .flatMap((item) => item.lastActivity ?? [])
      .sort()
      .at(-1),
  )

  onMounted(async () => {
    if (!repositories.length) return

    try {
      progress.value = await Promise.all(
        repositories.map(({ name }) => loadRepositoryProgress(name)),
      )
      status.value = 'ready'
    } catch (error) {
      console.warn('Não foi possível carregar o progresso do projeto.', error)
      status.value = 'failed'
    }
  })

  return { status, progress, issueCount, closedCount, mergedCount, percentage, lastActivity }
}
