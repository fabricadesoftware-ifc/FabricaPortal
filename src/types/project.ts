/** The part of the portal API response that the site uses. */
export interface Project {
  id: number
  members: { type: 'Docente' | 'Discente' }[]
}

export interface Team {
  teachers: number
  students: number
}

export interface FeaturedProject {
  /** Id in the portal API, used to load the team. */
  id: number
  category: string
  name: string
  title: string
  description: string
  technologies: string[]
  href: string
  cover: string
}
