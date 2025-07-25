import { loadTodos, saveTodos } from "../utils/fileHandler";
import chalk from "chalk";

export const doneCommand = (index: string) => {
  const todos = loadTodos();
  const i = parseInt(index) - 1;

  if (todos[i]) {
    todos[i].done = true;
    todos[i].completedAt = new Date().toISOString();
    saveTodos(todos);
    console.log(chalk.blue(`✅ Task done: "${todos[i].task}"`));
  } else {
    console.log(chalk.red("Invalid task number."));
  }
};
