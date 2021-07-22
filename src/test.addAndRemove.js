import { deleteTask } from './addAndRemove.js';
import displayTask, { generateId, Task } from './tasks.js';
import form from './input.js';

jest.mock('./tasks.js');

describe('deleteTask()', () => {
  test('remove an object from tasksArray', () => {
    const tasksArray = [
      {
        description: '',
        completedStatus: false,
        id: generateId(),
      },
      {
        description: '',
        completedStatus: false,
        id: generateId(),
      }];
    const id = generateId();

    Task.mockImplementation(() => true);

    delete window.location;
    window.location = { reload: jest.fn() };

    deleteTask(id, tasksArray);

    expect(tasksArray).toHaveLength(1);
  });

  test('remove the right object from tasksArray', () => {
    const tasksArray = [
      {
        description: 'one',
        completedStatus: false,
        id: generateId(),
      },
      {
        description: 'two',
        completedStatus: false,
        id: generateId(),
      }];
    const id = generateId();

    Task.mockImplementation(() => true);

    delete window.location;
    window.location = { reload: jest.fn() };

    deleteTask(id, tasksArray);

    expect(tasksArray[0].description).toBe('two');
  });
});

describe('Add object to taskArray', () => {
  test('Add object to the tasksArray', () => {
    const tasksArray = [];
    form.innerHTML = `
      <input type="text" class="input" placeholder="Add to your list...">
     `;

    Task.mockImplementation(() => true);

    delete window.location;
    window.location = { reload: jest.fn() };

    const task = new Task();
    displayTask(task, tasksArray);

    expect(task).toHaveLength(1);
  });

  test('does not allow an empty value added to task array', () => {
    const tasksArray = [];
    form.innerHTML = `
         <input type="text" class="input" placeholder="Add to your list...">
        `;

    Task.mockImplementation(() => true);

    delete window.location;
    window.location = { reload: jest.fn() };
    const task = new Task();
    displayTask(task, tasksArray);
    expect(task[0].description).toBe('');
  });
});