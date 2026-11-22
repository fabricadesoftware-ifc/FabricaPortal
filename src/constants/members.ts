import type { FeaturedMember, MemberRole } from '@/types/member'

export const memberRoles: Record<MemberRole, { label: string; color: string }> = {
  teacher: { label: 'Docentes', color: 'var(--color-brand-orange)' },
  student: { label: 'Discentes', color: '#8080ff' },
  alumnus: { label: 'Egressos', color: 'var(--color-brand-teal)' },
}

/** Names only, no photos. Add only people who agreed to appear: some students are underage (ECA). */
export const featuredMembers: FeaturedMember[] = [
  { name: 'Fábio Longo de Moura', role: 'teacher' },
  { name: 'Eduardo Da Silva', role: 'teacher' },
  { name: 'Marco A. Rojas', role: 'teacher' },
  { name: 'Gabriel Alves', role: 'student' },
  { name: 'Pedro J. Roza', role: 'student' },
]

/** Active teachers and students, plus alumni. */
export const MEMBER_COUNT = 33
