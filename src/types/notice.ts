/** The part of the portal API response that the site uses. */
export interface ApiNotice {
  id: number
  title: string
  post_date: string
}

export interface ApiNoticeDetails {
  description: string
}

export type NoticeCategory = 'Processo seletivo' | 'Inscrições' | 'Projetos'

export interface Notice {
  /** Id in the portal API, used to load the text and as the address. */
  id: number
  /** ISO date, such as 2026-04-13. */
  date: string
  category?: NoticeCategory
  title: string
  summary?: string
  color: string
}
