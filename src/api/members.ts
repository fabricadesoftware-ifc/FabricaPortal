import { members, IMembros } from '@/_data/membros'
export default class MembersApi {
    getMembers(): IMembros[] {
        return members
    }
}