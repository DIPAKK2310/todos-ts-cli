

import { loadTodos, saveTodos} from "../utils/fileHandler" 
import { Task } from "../utils/types";
import chalk from "chalk";

    export const addCommand = (task: string) => {

        const todos = loadTodos();
        const newTask : Task = {
            task,
            done:false,
            createdAt: new Date().toISOString(),
        }
        todos.push({ task, done: false,createdAt: new Date().toISOString(), });
        saveTodos(todos);
        console.log(chalk.green(`✔ Task added: "${task}"`));
    };