import type { PortfolioProject } from '@/types/project'
import { slugify } from './slugify'

/** "Águas" -> "aguas" */
export const getProjectSlug = ({ name }: Pick<PortfolioProject, 'name'>) => slugify(name)
