import { members, type IMembers } from '@/_data/members'
export default class MembersApi {
    getMembers(): IMembers[] {
        return members
    }
}