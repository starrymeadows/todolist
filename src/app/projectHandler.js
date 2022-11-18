import { createTodo } from './todos';
import { createProject } from './projects';

// manage projects
export const defaultProject = createProject('default');

export function addTodo(todo, project) {
    if (project) {
        todo.projectId = project.id;
        project.todos.push(todo);
        console.log(project.todos.length);
    }
    defaultProject.todos.push(todo);
    todo.id = defaultProject.todos.indexOf(todo);
    console.log(todo);
    console.log(defaultProject.todos.length);
}

// function deleteTodo(removedTodo) {
//     // remove from default project
//     let index = removedTodo.id;
//     // remove from individual project
// }