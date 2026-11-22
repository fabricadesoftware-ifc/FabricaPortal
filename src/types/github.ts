/** The part of the issues of GitHub that the site uses. Pull requests are in the same list. */
export interface ApiIssue {
  number: number
  title: string
  state: 'open' | 'closed'
  state_reason: string | null
  closed_at: string | null
  updated_at: string
  pull_request?: { merged_at: string | null }
}

export interface Issue {
  number: number
  /** Kind of work, such as FEAT. */
  tag?: string
  title: string
  /** ISO date. Null while it is open. */
  closedAt: string | null
}

export interface RepositoryProgress {
  /** Most recent first. */
  issues: Issue[]
  closedCount: number
  mergedCount: number
  /** ISO date of the last issue or pull request. */
  lastActivity?: string
}

/** The part of the searches of GitHub that the site uses. */
export interface ApiCommitSearch {
  total_count: number
  items: { commit: { author: { date: string } } }[]
}

export interface ApiPullRequestSearch {
  total_count: number
  items: {
    number: number
    title: string
    created_at: string
    html_url: string
    repository_url: string
  }[]
}

export interface PullRequest {
  number: number
  title: string
  /** ISO date. */
  createdAt: string
  href: string
  repository: string
}

export interface MemberActivity {
  commitCount: number
  pullRequestCount: number
  /** Most recent first. */
  pullRequests: PullRequest[]
  /** ISO date. */
  lastActivity?: string
}
