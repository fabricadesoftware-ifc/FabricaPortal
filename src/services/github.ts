import type { ApiCommitSearch, ApiIssue, ApiPullRequestSearch } from '@/types/github'
import { cachedRequest } from '@/utils/cachedRequest'

const ORGANIZATION = 'fabricadesoftware-ifc'
const PAGE_SIZE = 100
const MAX_PAGES = 5

async function sendIssues(repository: string) {
  const issues: ApiIssue[] = []

  for (let page = 1; page <= MAX_PAGES; page++) {
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_API_URL}/repos/${ORGANIZATION}/${repository}/issues?state=all&per_page=${PAGE_SIZE}&page=${page}`,
    )
    if (!response.ok) throw new Error(`Falha ao buscar ${repository} (${response.status})`)

    const list: ApiIssue[] = await response.json()
    issues.push(...list)
    if (list.length < PAGE_SIZE) break
  }

  return issues
}

/** Issues and pull requests of a repository. Cached: GitHub limits the requests per hour. */
export function fetchIssues(repository: string) {
  return cachedRequest(`issues:${repository}`, () => sendIssues(repository))
}

async function search<T>(path: string): Promise<T> {
  const response = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/search/${path}`)
  if (!response.ok) throw new Error(`Falha na busca do GitHub (${response.status})`)
  return response.json()
}

async function sendActivity(user: string, pullRequestCount: number) {
  const author = `author:${encodeURIComponent(user)}+org:${ORGANIZATION}`

  const [commits, pullRequests] = await Promise.all([
    search<ApiCommitSearch>(`commits?q=${author}&sort=author-date&order=desc&per_page=1`),
    search<ApiPullRequestSearch>(
      `issues?q=is:pr+${author}&sort=created&order=desc&per_page=${pullRequestCount}`,
    ),
  ])

  return { commits, pullRequests }
}

/** Commits and latest pull requests of someone in the organization. Cached. */
export function fetchActivity(user: string, pullRequestCount: number) {
  return cachedRequest(`activity:${user}:${pullRequestCount}`, () =>
    sendActivity(user, pullRequestCount),
  )
}
