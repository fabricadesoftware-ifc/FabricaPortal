import { projects, type IProjects } from '@/_data/projects'
export default class ProjectsApi {
    getProjects(): IProjects[] {
        return projects
    }
}