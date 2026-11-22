import { fetchActivity } from '@/services/github'
import type { MemberActivity } from '@/types/github'

const MAX_PULL_REQUESTS = 6

export async function loadMemberActivity(user: string): Promise<MemberActivity> {
  const { commits, pullRequests } = await fetchActivity(user, MAX_PULL_REQUESTS)

  const dates = [
    ...commits.items.map(({ commit }) => commit.author.date),
    ...pullRequests.items.map((item) => item.created_at),
  ]

  return {
    commitCount: commits.total_count,
    pullRequestCount: pullRequests.total_count,
    pullRequests: pullRequests.items.map((item) => ({
      number: item.number,
      title: item.title,
      createdAt: item.created_at,
      href: item.html_url,
      repository: item.repository_url.split('/').at(-1)!,
    })),
    lastActivity: dates.sort((a, b) => Date.parse(b) - Date.parse(a))[0],
  }
}
