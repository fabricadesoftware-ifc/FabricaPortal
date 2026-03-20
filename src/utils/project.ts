import type { IProject } from '@/types/project'

export const sortProjectsByStatus = (projects: IProject[]): IProject[] => {
  const prioridade: Record<string, number> = {
    concluído: 1,
    'em desenvolvimento': 2,
    'não iniciado': 3,
  }

  return [...projects].sort((a, b) => {
    const statusA = a.state?.toLowerCase() || ''
    const statusB = b.state?.toLowerCase() || ''

    const pesoA = prioridade[statusA] ?? 99
    const pesoB = prioridade[statusB] ?? 99

    return pesoA - pesoB
  })
}
