import fs from "fs";
import { Task } from "./types";



// File path for storing todo tasks
const filePath = 'todo.json';


// Load all todo tasks
export const loadTodos = (): Task[] => {
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

// It saves the todo tasks to the file
export const saveTodos = (todos: Task[]) => {
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}



export const editTask = (index: number, newTask: string): void => {
  const todos = loadTodos();
  if (index < 0 || index >= todos.length) {
    console.log(`❌ Invalid task index: ${index}`);
    return;
  }
  todos[index].task = newTask;
  saveTodos(todos);
  console.log(`✏️  Task ${index + 1} updated successfully!`);
};