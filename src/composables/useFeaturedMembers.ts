import { computed, onMounted, ref } from 'vue'
import { featuredMembers, MEMBER_COUNT } from '@/constants/members'
import type { Member } from '@/types/member'
import { loadMembers } from '@/utils/loadMembers'

/** Featured members that are still on the API, and how many people are not shown. */
export function useFeaturedMembers() {
  const members = ref<Member[]>(featuredMembers)
  const total = ref(MEMBER_COUNT)
  const hiddenCount = computed(() => total.value - members.value.length)

  onMounted(async () => {
    try {
      const all = await loadMembers()
      members.value = featuredMembers.flatMap(
        (featured) => all.find(({ name }) => name === featured.name) ?? [],
      )
      total.value = all.length
    } catch (error) {
      console.warn('Não foi possível carregar os membros.', error)
    }
  })

  return { members, hiddenCount }
}
