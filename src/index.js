import './app/projectHandler';
import { addTodo, defaultProject } from './app/projectHandler';
import { addProject, createProject,  } from './app/projects';
import { createTodo } from './app/todos';

let todoTest = createTodo('test');
console.log(todoTest);

let newProject = createProject('test');
console.log(newProject);
console.log(defaultProject);

addProject(newProject);
addTodo(todoTest, newProject);