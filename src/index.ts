#!/usr/bin/env node

import { Command } from "commander";
import { addCommand } from "./commands/add";
import {listCommand} from "./commands/list"
import { doneCommand } from "./commands/done";
import { removeCommand } from "./commands/remove";
import { editCommand } from "./commands/edit";


// cli program setup
const program = new Command();


program
  .name('todo')
  .description('A TypeScript CLI todo tracker')
  .version('1.0.0');


//   Add new tasks
program
  .command('add <task>')
  .description('Add a new todo')
  .action(addCommand)

  

// List all tasks
program
  .command('list')
  .description('List all todos')
  .action(listCommand);


// Mark a task as done
program
  .command('done <index>')
  .description('Mark task as done')
  .action(doneCommand);

// Delete/remove a task at given index
program
  .command('remove <index>')
  .description('Remove a task')
  .action(removeCommand);
program
  .command('edit <index> <newTask>')
  .description('edit a task by its index')
  .action((index,newTask)=>{
    const idx = parseInt(index)-1;
    editCommand(idx,newTask)


  });

program.parse();