import type { IMember } from '@/types/member'

export const sortMembersByStatus = (members: IMember[]): IMember[] => {
  const prioridade: Record<string, number> = {
    ativo: 1,
    inativo: 2,
    egresso: 3,
  }

  return [...members].sort((a, b) => {
    const statusA = a.status?.toLowerCase() || ''
    const statusB = b.status?.toLowerCase() || ''

    const pesoA = prioridade[statusA] ?? 99
    const pesoB = prioridade[statusB] ?? 99

    return pesoA - pesoB
  })
}
