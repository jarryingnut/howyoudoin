import Project from "./Project"

export default class HowYouDoin {
    projects: {name: string, tasks: any[]}[]
    constructor() {
      this.projects = []
      this.projects.push(new Project('inbox'))
      this.projects.push(new Project('today'))
      this.projects.push(new Project('upcoming'))
      this.projects.push(new Project('star'))
    }

    
}