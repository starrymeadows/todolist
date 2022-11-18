// factory to create projects
export function createProject(title) {
    let todos = [];
    console.log('project created');
    return {title, todos}
}

export let namedProjects = [];

export function addProject(newProject) {
    namedProjects.push(newProject);
    newProject.id = namedProjects.indexOf(newProject);
}

export function removeProject(removedProject) {
    const index = removedProject.id;
    namedProjects.splice(index, 1);
    namedProjects.forEach(project => project.id = namedProjects.indexOf(project));
}