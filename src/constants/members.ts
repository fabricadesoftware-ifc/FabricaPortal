import type { Member, MemberRole } from '@/types/member'

export const memberRoles: Record<MemberRole, { label: string; singular: string; color: string }> = {
  teacher: { label: 'Docentes', singular: 'Docente', color: 'var(--color-brand-orange)' },
  student: { label: 'Discentes', singular: 'Discente', color: '#8080ff' },
  alumnus: { label: 'Egressos', singular: 'Egresso', color: 'var(--color-brand-teal)' },
}

/**
 * Shown on the home page, and on the members page when the API is unavailable.
 * Names only, no photos. Add only people who agreed to appear: some students are underage (ECA).
 * People with the same role stay together.
 */
export const featuredMembers: Member[] = [
  { name: 'Fábio Longo de Moura', role: 'teacher' },
  { name: 'Eduardo Da Silva', role: 'teacher' },
  { name: 'Marco A. Rojas', role: 'teacher' },
  { name: 'Gabriel Alves', role: 'student' },
  { name: 'Pedro J. Roza', role: 'student' },
]

/** Active teachers and students, plus alumni. */
export const MEMBER_COUNT = 32
