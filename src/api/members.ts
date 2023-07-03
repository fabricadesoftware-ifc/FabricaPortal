import { members, type IMembers, types, type ITypes } from '@/_data/members'
export default class MembersApi {
    getMembers(): IMembers[] {
        return members
    }
    getTypes(): ITypes[] {
        return types
    }
    getSixMembers(): IMembers[] {
        return members.slice(0, 6)
    }
}