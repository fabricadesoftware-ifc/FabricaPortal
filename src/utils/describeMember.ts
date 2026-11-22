import { memberRoles } from '@/constants/members'
import type { Member } from '@/types/member'
import type { PortfolioProject } from '@/types/project'

const list = new Intl.ListFormat('pt-BR')

/** Text of who does not have one. */
export function describeMember({ role }: Member, projects: PortfolioProject[]) {
  const intro = `${memberRoles[role].singular} da Fábrica de Software do IFC Campus Araquari.`
  if (!projects.length) return intro

  const verb = role === 'alumnus' ? 'Participou' : 'Participa'
  const noun = projects.length === 1 ? 'do projeto' : 'dos projetos'

  return `${intro} ${verb} ${noun} ${list.format(projects.map(({ name }) => name))}.`
}
