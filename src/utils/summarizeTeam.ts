import type { Team } from '@/types/project'

/** "1 docente · 5 discentes" */
export const summarizeTeam = ({ teachers, students }: Team) =>
  [
    teachers && `${teachers} ${teachers === 1 ? 'docente' : 'docentes'}`,
    students && `${students} ${students === 1 ? 'discente' : 'discentes'}`,
  ]
    .filter(Boolean)
    .join(' · ')
