export interface Technology {
  name: string
  /** Address of the logo. Some do not have one. */
  icon?: string
}

export interface TechnologyGroup {
  name: string
  technologies: Technology[]
}
