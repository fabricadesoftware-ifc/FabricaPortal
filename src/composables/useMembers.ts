import { onMounted, ref } from 'vue'
import { featuredMembers, MEMBER_COUNT } from '@/constants/members'
import type { Member } from '@/types/member'
import { loadMembers } from '@/utils/loadMembers'

/** Every member. Empty while loading, and only the featured ones when the API is unavailable. */
export function useMembers() {
  const members = ref<Member[]>([])
  /** People who are not on the list. */
  const hiddenCount = ref(0)
  const isLoading = ref(true)

  onMounted(async () => {
    try {
      members.value = await loadMembers()
    } catch (error) {
      console.warn('Não foi possível carregar os membros.', error)
      members.value = featuredMembers
      hiddenCount.value = MEMBER_COUNT - featuredMembers.length
    } finally {
      isLoading.value = false
    }
  })

  return { members, hiddenCount, isLoading }
}
