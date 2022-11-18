import './projects';
import { createProject } from './projects';
import './todos';
import { createTodo } from './todos';

// manage projects


export function addTodo(title, description, dueDate, priority, project) {
    const newTodo = createTodo(
        title,
        description,
        dueDate,
        priority);
    if (project) {
        newTodo.projectId = project.id;
        project.todos.push(newTodo);
    }
    defaultProject.push(newTodo);
    newTodo.id = defaultProject.indexOf(newTodo);
}

// function deleteTodo(removedTodo) {
//     // remove from default project
//     let index = removedTodo.id;
//     // remove from individual project
// }