import { fetchIssues } from '@/services/github'
import type { ApiIssue, Issue, RepositoryProgress } from '@/types/github'

/** Issues that were closed without being done. */
const DISCARDED = ['not_planned', 'duplicate']

/** "FEAT 2 - Design System", "fix: Login" and "[FIX] Login" */
const TAG_PATTERN = /^\[?([a-z]{2,8}(?: \d+)?)\]?\s*(?:[:-]|(?<=\]))\s*(?=\S)/i

function toIssue({ number, title, closed_at }: ApiIssue): Issue {
  const tag = title.match(TAG_PATTERN)

  return {
    number,
    tag: tag?.[1],
    title: tag ? title.slice(tag[0].length) : title,
    closedAt: closed_at,
  }
}

export async function loadRepositoryProgress(repository: string): Promise<RepositoryProgress> {
  const list = await fetchIssues(repository)

  const issues = list
    .filter((item) => !item.pull_request && !DISCARDED.includes(item.state_reason ?? ''))
    .sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at))

  return {
    issues: issues.map(toIssue),
    closedCount: issues.filter(({ state }) => state === 'closed').length,
    mergedCount: list.filter((item) => item.pull_request?.merged_at).length,
    lastActivity: list
      .map((item) => item.updated_at)
      .sort()
      .at(-1),
  }
}
