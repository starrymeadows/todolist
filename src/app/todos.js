// factory to create todos
export function createTodo(title, description, dueDate, priority) {
    let complete = false;
    // something in here to format the date
    return { title, description, dueDate, priority, complete }
}

// function to edit todo
function editTodo(todo, attribute, newValue) {
    //if newValue is a date, format it
    todo[attribute] = newValue;
}