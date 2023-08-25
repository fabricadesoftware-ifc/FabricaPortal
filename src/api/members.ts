import { members, type IMembers, occupations, type IOccupations } from '@/_data/members'

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
    return members.sort(()=> Math.random() - 0.5).slice(0, 6)
  }
}
