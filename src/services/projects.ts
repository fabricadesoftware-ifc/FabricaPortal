import type { Project } from '@/types/project'

const API_URL =
  import.meta.env.VITE_API_URL ?? 'https://portal-api.fabricadesoftware.ifc.edu.br/api'

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/projects/`)
  if (!response.ok) throw new Error(`Falha ao buscar projetos (${response.status})`)
  return response.json()
}
