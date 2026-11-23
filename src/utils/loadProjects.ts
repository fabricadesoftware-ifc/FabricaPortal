import { hiddenProjectIds, portfolioProjects } from '@/constants/portfolio'
import { fetchProjects } from '@/services/projects'
import type { PortfolioProject, Project, ProjectStatus } from '@/types/project'

const statuses: Record<string, ProjectStatus> = {
  'Não Iniciado': 'planned',
  'Em Desenvolvimento': 'active',
  Concluído: 'completed',
}

/** Names of the API that the site writes in another way. */
const technologyNames: Record<string, string> = { VueJS: 'Vue.js', Node: 'Node.js' }

/** "Fábrica Painel" -> "Painel", "FabricaHackathon" -> "Hackathon" */
const shortName = (name: string) => name.trim().replace(/^f[áa]brica\s*(?=.)/i, '')

/** The most recent image. */
function getCover({ images }: Project) {
  const [latest] = [...images].sort((a, b) => Date.parse(b.uploaded_on) - Date.parse(a.uploaded_on))

  return latest?.file
    .replace(/^http:/, 'https:')
    .replace('/image/upload/', '/image/upload/c_limit,w_1400,f_auto,q_auto/')
}

function toPortfolioProject(project: Project, details?: PortfolioProject): PortfolioProject {
  const technologies = project.technologies.map(({ name }) => technologyNames[name] ?? name)

  return {
    description: project.about,
    ...details,
    id: project.id,
    name: shortName(project.name),
    about: project.about,
    memberIds: project.members.map(({ id }) => id),
    status: statuses[project.state] ?? 'active',
    technologies: [...new Set([...(details?.technologies ?? []), ...technologies])],
    cover: details?.cover ?? getCover(project),
  }
}

/** Projects of the API with the details of the site. The ones without details go to the end. */
export async function loadProjects(): Promise<PortfolioProject[]> {
  const projects = (await fetchProjects()).filter(({ id }) => !hiddenProjectIds.includes(id))

  const known = portfolioProjects.flatMap((details) => {
    // It is not registered on the API.
    if (!details.id) return details

    const project = projects.find(({ id }) => id === details.id)
    return project ? toPortfolioProject(project, details) : []
  })
  const others = projects
    .filter(({ id }) => !portfolioProjects.some((details) => details.id === id))
    .map((project) => toPortfolioProject(project))

  return [...known, ...others]
}
