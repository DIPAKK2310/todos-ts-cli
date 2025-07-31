import fs from 'fs';
import path from 'path';
import { addTask, __setFilePath, loadTodos, editTask } from '../src/utils/fileHandler';
import { Task } from '../src/utils/types';

describe('fileHandler basic operations', () => {
  const tempFile = path.join(__dirname, 'temp_todo.json');

  beforeEach(() => {
    __setFilePath(tempFile);
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
  });

  afterEach(() => {
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
  });

  it('adds a new task with correct shape', () => {
    const task = addTask('Write Jest tests');

    expect(task.task).toBe('Write Jest tests');
    expect(task.done).toBe(false);
    expect(typeof task.createdAt).toBe('string');
    expect(task.completedAt).toBeUndefined();

    const stored = loadTodos();
    expect(stored.length).toBe(1);
    expect(stored[0]).toMatchObject({
      task: 'Write Jest tests',
      done: false,
    });
  });

  it('edits an existing task', () => {
    addTask('Old title');
    editTask(0, 'New title');

    const stored = loadTodos();
    expect(stored[0].task).toBe('New title');
  });

  it('does not throw on invalid edit index', () => {
    // starting empty
    expect(() => editTask(5, 'Whatever')).not.toThrow();
    const stored = loadTodos();
    expect(stored).toEqual([]);
  });
});
