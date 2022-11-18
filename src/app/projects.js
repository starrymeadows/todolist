// factory to create projects
export function createProject(title) {
    let todos = [];
    return {title, todos}
}

export let namedProjects = [];
export const defaultProject = createProject('default');

export function addProject(title) {
    const newProject = createProject(title);
    namedProjects.push(newProject);
    newProject.id = namedProjects.indexOf(newProject);
}

export function removeProject(removedProject) {
    const index = removedProject.id;
    namedProjects.splice(index, 1);
    namedProjects.forEach(project => project.id = namedProjects.indexOf(project));
}