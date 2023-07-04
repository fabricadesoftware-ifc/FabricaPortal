import { members, type IMembers, occupations, type Ioccupations } from '@/_data/members'
export default class MembersApi {
    getMembers(): IMembers[] {
        return members
    }
    getoccupations(): Ioccupations[] {
        return occupations
    }
    getSixMembers(): IMembers[] {
        return members.slice(0, 6)
    }
}