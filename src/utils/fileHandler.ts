import fs from 'fs';
import { Task } from './types';

let filePath = 'todo.json'; // default production file

// for tests: override where tasks are stored
export const __setFilePath = (path: string) => {
  filePath = path;
};

export const loadTodos = (): Task[] => {
  if (!fs.existsSync(filePath)) return [];
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as Task[];
  } catch {
    return [];
  }
};

export const saveTodos = (todos: Task[]) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

export const addTask = (taskText: string): Task => {
  const todos = loadTodos();
  const now = new Date().toISOString();
  const newTask: Task = {
    task: taskText,
    done: false,
    createdAt: now,
  };
  todos.push(newTask);
  saveTodos(todos);
  return newTask;
};

export const editTask = (index: number, newTaskText: string): void => {
  const todos = loadTodos();
  if (index < 0 || index >= todos.length) {
    console.log(`❌ Invalid task index: ${index}`);
    return;
  }
  todos[index].task = newTaskText;
  saveTodos(todos);
  console.log(`✏️  Task ${index + 1} updated successfully!`);
};
