import type { ApiMember } from '@/types/member'
import { createRequest } from './api'

export const fetchMembers = createRequest<ApiMember[]>('/members/')
