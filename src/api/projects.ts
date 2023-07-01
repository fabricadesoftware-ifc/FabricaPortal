import { projects, type IProjects } from '@/_data/projects'
export default class ProjectsApi {
    getMembers(): IProjects[] {
        return projects
    }
}