import { memberRoles } from '@/constants/members'
import { fetchMembers } from '@/services/members'
import type { ApiMember, Member, MemberRole } from '@/types/member'
import { shortenName } from './shortenName'

const roleOrder = Object.keys(memberRoles) as MemberRole[]

function getRole({ type, status }: ApiMember): MemberRole {
  if (status === 'Egresso') return 'alumnus'
  return type === 'Docente' ? 'teacher' : 'student'
}

/** Shorter ones are only the name of the role. */
const MIN_BIOGRAPHY = 40

/** "https://github.com/user" -> "user" */
const getGithubUser = (address: string | null) =>
  address?.match(/^https?:\/\/(?:www\.)?github\.com\/([\w-]+)\/?$/i)?.[1]

const getLinkedin = (address: string | null) =>
  address?.trim().match(/^https?:\/\/(?:[a-z]+\.)?linkedin\.com\/in\/[^/?#\s]+/i)?.[0]

// No photos, other social networks or texts of students and alumni: some are underage (ECA).
function toMember(member: ApiMember): Member {
  const role = getRole(member)
  const biography = member.biography?.trim() ?? ''

  return {
    id: member.id,
    name: shortenName(member.name),
    role,
    biography: role === 'teacher' && biography.length > MIN_BIOGRAPHY ? biography : undefined,
    github: getGithubUser(member.github),
    linkedin: getLinkedin(member.linkedin),
  }
}

/** Current members and alumni, grouped by role. */
export async function loadMembers() {
  const members = await fetchMembers()

  return members
    .filter(({ status }) => status !== 'Inativo')
    .map(toMember)
    .sort(
      (a, b) =>
        roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role) ||
        a.name.localeCompare(b.name, 'pt-BR'),
    )
}
