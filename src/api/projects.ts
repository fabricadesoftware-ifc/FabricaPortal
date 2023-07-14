import { projects, type IProjects } from '@/_data/projects'
export default class ProjectsApi {
    getSixProjects(): IProjects[] {
        return projects.slice(0, 6)
    }
    getProjectsById(id: string): IProjects | undefined {
        return projects.find((project) => project.id === id)
    }
    getProjects(): IProjects[] {
        return projects
    }
}