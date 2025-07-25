import chalk from "chalk";
import { loadTodos } from "../utils/fileHandler";




export const listCommand= () =>{
   
    const todos = loadTodos();
    if (todos.length === 0) {
      console.log(chalk.yellow('No tasks found.'));
      return;
    }
    todos.forEach((t, i) => {
    const status = t.done
      ? chalk.strikethrough(t.task) + chalk.gray(` (✔ done at ${t.completedAt})`)
      : t.task + chalk.gray(` (🕒 created at ${t.createdAt})`);
    console.log(`${i + 1}. ${status}`);
  });
}