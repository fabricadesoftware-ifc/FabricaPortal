import type { Project } from '@/types/project'
import { createRequest } from './api'

export const fetchProjects = createRequest<Project[]>('/projects/')
