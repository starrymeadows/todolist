import './app/projectHandler';
import { addTodo, removeTodo, defaultProject, clearComplete } from './app/projectHandler';
import { addProject, createProject, removeProject } from './app/projects';
import { createTodo, changeCompletion } from './app/todos';

let todoTest = createTodo('test');
let todoTest2 = createTodo('test');
let todoTest3 = createTodo('test');
let todoTest4 = createTodo('test');
console.log(todoTest);

let newProject = createProject('test');
console.log(newProject);
console.log(defaultProject);

addProject(newProject);
addTodo(todoTest, newProject);
addTodo(todoTest2, newProject);
addTodo(todoTest3, newProject);
addTodo(todoTest4, newProject);
console.log(newProject);

changeCompletion(todoTest);
changeCompletion(todoTest2);
console.log(newProject);

clearComplete(newProject);

console.log(newProject);
console.log(defaultProject);