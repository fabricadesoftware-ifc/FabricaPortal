import { members, type IMembers, occupations, type IOccupations, type ILink, redesSociais } from '@/_data/members'

export default class MembersApi {
  getMembers(): IMembers[] {
    return members
  }

  getMemberById(id: string): IMembers | undefined {
    return members.find((member) => member.id === id)
  }

  getOccupations(): IOccupations[] {
    return occupations
  }

  getSixMembers(): IMembers[] {
    return members.slice(0, 6)
  }
}
