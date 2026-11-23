import type { IconName } from '@/components/global/AppIcon.vue'

/** The part of the portal API response that the site uses. */
export interface Project {
  id: number
  name: string
  state: string
  about: string
  technologies: { name: string }[]
  images: { file: string; uploaded_on: string }[]
  members: { id: number; type: 'Docente' | 'Discente' }[]
}

export interface Team {
  teachers: number
  students: number
}

export type ProjectCategory = 'Gestão' | 'Educação' | 'Saúde' | 'Infraestrutura'

export type ProjectStatus = 'planned' | 'active' | 'completed'

export interface PortfolioProject {
  /** Id in the portal API. Without it the project is not there. */
  id?: number
  name: string
  category?: ProjectCategory
  status: ProjectStatus
  description: string
  /** Long text of the API. */
  about?: string
  /** The most relevant ones first: the card only shows those. */
  technologies: string[]
  href?: string
  /** Ids of the members in the portal API. */
  memberIds?: number[]
  /** Projects without one show the image of the API, or an illustration. */
  cover?: string
}

export interface Repository {
  /** Name in the GitHub organization. */
  name: string
  label: string
}

export interface ProjectFeature {
  icon: IconName
  title: string
  description: string
}

/** What only the page of the project shows. */
export interface ProjectDetails {
  repositories: Repository[]
  features: ProjectFeature[]
  /** Other addresses, next to the one of the project. */
  links?: ProjectLink[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface TechnologyFilter {
  label: string
  technologies: string[]
}

export interface FeaturedProject {
  /** Id in the portal API, used to load the team. */
  id: number
  category: ProjectCategory
  name: string
  title: string
  description: string
  technologies: string[]
  cover: string
}
