export interface IMember {
  id: number
  name: string
  image?: Iimage
  biography?: string
  status?: string
  role?: string
  type?: string
  github?: string
  linkedin?: string
}

export interface IMembersState {
  members: IMember[]
  selectedMember: IMember | null
  searchedMembers: IMember[]
  error: boolean
  isLoading: boolean
}

export interface Iimage {
  id: number
  file: string
  description?: string
  folder?: string
  uploaded_on: string
}
