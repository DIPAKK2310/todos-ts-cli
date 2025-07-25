import { loadTodos, saveTodos } from "../utils/fileHandler";
import chalk from "chalk";

export const removeCommand = (index: string) => {
  const todos = loadTodos();
  const i = parseInt(index) - 1;

  if (todos[i]) {
    const removed = todos.splice(i, 1);
    saveTodos(todos);
    console.log(chalk.red(`🗑 Removed: "${removed[0].task}"`));
  } else {
    console.log(chalk.red("Invalid task number."));
  }
};
