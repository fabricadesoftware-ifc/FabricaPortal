import { members, IMembers, occupations, Ioccupations } from '@/_data/members'
import http from '../http-common'

export default class MembersApi {
  getMembers(): IMembers[] {
    return members
  }

  getMemberById(id: string): IMembers | undefined {
    return members.find((member) => member.id === id)
  }

  getOccupations(): Ioccupations[] {
    return occupations
  }

  getSixMembers(): IMembers[] {
    return members.slice(0, 6)
  }
}
