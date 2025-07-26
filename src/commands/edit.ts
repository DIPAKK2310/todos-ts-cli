import { loadTodos, saveTodos } from "../utils/fileHandler";
import chalk from "chalk";

export const editCommand = (index: number, newTask: string): void => {
  const todos = loadTodos();

  if (index < 0 || index >= todos.length) {
    console.log(chalk.red(`❌ Invalid task index: ${index + 1}`));
    return;
  }

  const oldTask = todos[index].task;
  todos[index].task = newTask;
  saveTodos(todos);

  console.log(
    chalk.green(`✏️  Task ${index + 1} updated from "${oldTask}" to "${newTask}"`)
  );
};
