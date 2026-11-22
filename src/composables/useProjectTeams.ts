import { onMounted, ref } from 'vue'
import { fetchProjects } from '@/services/projects'
import type { Team } from '@/types/project'

/** Team sizes, by project id. Stays empty when the API is unavailable. */
export function useProjectTeams() {
  const teams = ref<Record<number, Team>>({})

  onMounted(async () => {
    try {
      const projects = await fetchProjects()

      // Only the counts are kept: no personal data of the members.
      teams.value = Object.fromEntries(
        projects.map(({ id, members }) => {
          const teachers = members.filter(({ type }) => type === 'Docente').length
          return [id, { teachers, students: members.length - teachers }]
        }),
      )
    } catch (error) {
      console.warn('Não foi possível carregar as equipes dos projetos.', error)
    }
  })

  return teams
}
