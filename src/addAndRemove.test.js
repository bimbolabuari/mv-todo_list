import { deleteTask } from './addAndRemove.js';
import displayTask, { generateId, Task } from './tasks.js';


// import document from './index.html';

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
    
    deleteTask(id, tasksArray);

    expect(tasksArray[0].description).toBe('two');
  });
});

describe('Add object to taskArray', () => {
  test('Add object to the tasksArray', () => {
    const tasksArray = [];
    document.body.innerHTML = `
      <input type="text" class="input" placeholder="Add to your list...">
     `;

    const task = new Task();
    displayTask(task, tasksArray);

    expect(task).toHaveLength(1);
  });

  test('does not allow an empty value added to task array', () => {
    const tasksArray = [];
    document.body.innerHTML = 
    `
      <input type="text" class="input" placeholder="Add to your list...">
    `;
    const task = new Task();
    displayTask(task, tasksArray);
    expect(task[0].description).toBe('');
  });
});