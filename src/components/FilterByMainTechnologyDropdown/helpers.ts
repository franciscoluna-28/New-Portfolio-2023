export function filterProjects(projects: Array<any>, technology: string) {
    if (technology === 'All') {
      return projects;
    }
    return projects.filter((project) => project.mainTechnology === technology);
  }