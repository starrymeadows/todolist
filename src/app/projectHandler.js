import { createProject, namedProjects } from './projects';

// manage projects
export const defaultProject = createProject('default');

export function addTodo(todo, project) {
    if (project) {
        todo.projectId = project.id;
        project.todos.push(todo);
    }
    defaultProject.todos.push(todo);
    todo.id = defaultProject.todos.indexOf(todo);
}

export function removeTodo(removedTodo) {
    // remove from default project
    const index = removedTodo.id;
    defaultProject.todos.splice(index, 1);
    defaultProject.todos.forEach((todo) => todo.id = defaultProject.todos.indexOf(todo));
    console.log('removed from default');
    // remove from individual project
    const projectId = removedTodo.projectId;
    if (projectId != undefined) {
        const project = namedProjects[projectId];
        const projectIndex = project.todos.indexOf(removedTodo);
        project.todos.splice(projectIndex, 1);
        console.log('removed from project');
    }
}

export function clearComplete(project) {
    console.log(project.todos.length);
    project.todos.forEach((todo) => {
        console.log('iterate');
        if (todo.complete) removeTodo(todo);
    })
}

function clearProject(project) {
    project.todos.forEach((todo) => {
        removeTodo(todo);
    })
}