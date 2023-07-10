import { projects, type IProjects } from '@/_data/projects'
export default class ProjectsApi {
    getProjects(): IProjects[] {
        return projects
    }
    getProjectsById(id: string): IProjects | undefined {
        return projects.find((project) => project.id === id)
    }
    
}