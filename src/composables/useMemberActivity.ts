import { onMounted, ref } from 'vue'
import type { MemberActivity } from '@/types/github'
import { loadMemberActivity } from '@/utils/loadMemberActivity'

/** What someone did on GitHub, in the organization. */
export function useMemberActivity(user?: string) {
  const activity = ref<MemberActivity>()
  const hasFailed = ref(false)

  onMounted(async () => {
    if (!user) return

    try {
      activity.value = await loadMemberActivity(user)
    } catch (error) {
      console.warn('Não foi possível carregar a atividade no GitHub.', error)
      hasFailed.value = true
    }
  })

  return { activity, hasFailed }
}
