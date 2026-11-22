export interface Notice {
  /** ISO date, such as 2026-04-13. */
  date: string
  category: string
  title: string
  /** Shown only on the most recent notice. */
  summary?: string
  color: string
}
