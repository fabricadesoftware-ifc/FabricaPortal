import { onMounted, ref } from 'vue'
import { cachedRequest } from '@/utils/cachedRequest'

const REPOS_URL = `${import.meta.env.VITE_GITHUB_API_URL}/orgs/fabricadesoftware-ifc/repos?sort=pushed&direction=desc&per_page=1`

interface Repo {
  name: string
  pushed_at: string
  html_url: string
}

/** "fabricaPainel_frontEnd" -> "painel" */
const projectName = (repo: string) =>
  repo
    .toLowerCase()
    .replace(/[_-]?(front|back)-?end$/, '')
    .replace(/^fabrica(?=.)/, '')

const timeAgo = (iso: string) => {
  const minutes = Math.max(1, Math.floor((Date.now() - Date.parse(iso)) / 60_000))
  const format = new Intl.RelativeTimeFormat('pt-BR', { style: 'narrow' })

  if (minutes < 60) return format.format(-minutes, 'minute')
  if (minutes < 60 * 24) return format.format(-Math.floor(minutes / 60), 'hour')
  return format.format(-Math.floor(minutes / (60 * 24)), 'day')
}

/** Latest push in the organization. Stays null when the GitHub API is unavailable. */
export function useLastCommit() {
  const lastCommit = ref<{ ago: string; project: string; url: string } | null>(null)

  onMounted(async () => {
    try {
      const [repo] = await cachedRequest('last-repo', async () => {
        const response = await fetch(REPOS_URL)
        if (!response.ok) throw new Error(`Falha ao buscar repositórios (${response.status})`)
        return (await response.json()) as Repo[]
      })
      if (repo) {
        lastCommit.value = {
          ago: timeAgo(repo.pushed_at),
          project: projectName(repo.name),
          url: repo.html_url,
        }
      }
    } catch {
      // Decorative information: the hero works without it.
    }
  })

  return lastCommit
}
