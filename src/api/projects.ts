import { projects, type IProjects, langs, type ILangs } from '@/_data/projects'

export default class ProjectsApi {
  getSixProjects(): IProjects[] {
    return projects.slice(-6).reverse()
  }
  getProjectsById(id: string): IProjects | undefined {
    return projects.find((project) => project.id === id)
  }
  getProjects(): IProjects[] {
    return projects.reverse()
  }
  getLangs(): ILangs[] {
    return langs
  }
  getLangsById(id: string): ILangs | undefined {
    return langs.find((lang) => lang.id === id)
  }
}
