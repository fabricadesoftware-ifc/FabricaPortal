export interface Technology {
  name: string
  /** Address of the logo. */
  icon: string
}

export interface TechnologyGroup {
  name: string
  technologies: Technology[]
}
