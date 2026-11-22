import { noticeColors, noticeDetails } from '@/constants/notices'
import { fetchNotices } from '@/services/notices'
import type { Notice } from '@/types/notice'

/** Every notice, most recent first. */
export async function loadNotices(): Promise<Notice[]> {
  const notices = await fetchNotices()

  return [...notices]
    .sort((a, b) => Date.parse(b.post_date) - Date.parse(a.post_date))
    .map(({ id, title, post_date }, index) => ({
      id,
      title: title.trim(),
      // Already in the local time zone.
      date: post_date.slice(0, 10),
      color: noticeColors[index % noticeColors.length]!,
      ...noticeDetails[id],
    }))
}
