import type { IMember } from '@/types/member'

export interface IProject {
  id: number | string
  name: string
  about: string
  logo: string
  images: { file: string }[]
  type: string
  state: string
  members: IMember[]
  areas?: string[]
  technologies?: { id: number; name: string }[]
  links?: Record<string, string>
}

export interface IProjectsState {
  projects: IProject[]
  selectedProject: IProject | null
  filteredProjects: IProject[]
  error: boolean
  isLoading: boolean
  currentPage: number
  itemsPerPage: number
}
