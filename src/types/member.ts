export type MemberRole = 'teacher' | 'student' | 'alumnus'

/** The part of the portal API response that the site uses. */
export interface ApiMember {
  id: number
  name: string
  type: 'Docente' | 'Discente'
  status: 'Ativo' | 'Egresso' | 'Inativo'
  biography: string | null
  github: string | null
  linkedin: string | null
}

export interface Member {
  /** Id in the portal API. */
  id?: number
  name: string
  role: MemberRole
  /** Only of teachers: the ones of students and alumni tell ages and other personal data. */
  biography?: string
  /** User name on GitHub. */
  github?: string
  /** Address of the profile. */
  linkedin?: string
}
