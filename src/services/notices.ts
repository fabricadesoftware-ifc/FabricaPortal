import type { ApiNotice, ApiNoticeDetails } from '@/types/notice'
import { createRequest } from './api'

export const fetchNotices = createRequest<ApiNotice[]>('/news/')

const requests = new Map<number, () => Promise<ApiNoticeDetails>>()

/** The list does not have the text of the notices. */
export function fetchNotice(id: number) {
  if (!requests.has(id)) requests.set(id, createRequest<ApiNoticeDetails>(`/news/${id}/`))
  return requests.get(id)!()
}
