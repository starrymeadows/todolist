import './app/projectHandler';
import { addTodo, removeTodo, defaultProject } from './app/projectHandler';
import { addProject, createProject, removeProject } from './app/projects';
import { createTodo } from './app/todos';

let todoTest = createTodo('test');
console.log(todoTest);

let newProject = createProject('test');
console.log(newProject);
console.log(defaultProject);

addProject(newProject);
addTodo(todoTest, newProject);

removeTodo(todoTest);
console.log(newProject);
console.log(defaultProject);

removeProject(newProject);