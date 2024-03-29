import { projects, type IProjects, langs, type ILangs } from '@/data/mock/projects'

export default class ProjectsApi {
  getSixProjects(): IProjects[] {
    return projects.slice(-6).reverse()
  }
  getProjectById(id: string): IProjects | undefined {
    return projects.find((project) => project.id === id)
  }
  getProjects(): IProjects[] {
    return projects.reverse()
  }
  getLangs(): ILangs[] {
    return langs
  }
  getLangsInProjects(id: string): ILangs | undefined {
    return langs.find((lang) => lang.id === id)
  }
}
