import format from "date-fns/format";

// get 
function formatDate() {

}

// factory to create todos
export function createTodo(title, description, dueDate, priority) {
    let complete = false;
    // something in here to format the date
    return { 
        title, 
        description, 
        dueDate, 
        priority, 
        complete 
    }
}

function changeName(todo, title) {
    todo.title = title;
}

function changeDescription(todo, description) {
    todo.description = description;
}

function changeDate(todo, dueDate) {
    todo.dueDate = dueDate;
}

function changePriority(todo, priority) {
    todo.priority = priority;
}

export function changeCompletion(todo) {
    todo.complete = !todo.complete;
}