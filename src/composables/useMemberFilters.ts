import { computed, ref, type Ref } from 'vue'
import type { Member, MemberRole } from '@/types/member'
import { normalizeText } from '@/utils/normalizeText'

/** Filters of the members page. A null role means all of them. */
export function useMemberFilters(members: Readonly<Ref<Member[]>>) {
  const search = ref('')
  const role = ref<MemberRole | null>(null)

  const matches = computed(() =>
    members.value.filter(
      (member) =>
        (!role.value || member.role === role.value) &&
        normalizeText(member.name).includes(normalizeText(search.value)),
    ),
  )

  return { search, role, matches }
}
