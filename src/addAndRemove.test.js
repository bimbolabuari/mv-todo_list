/**
 * @jest-environment jsdom
 */
import { deleteTask } from './addAndRemove.js';
import { addTask } from './app.js';
import document from './index.html';

describe('deleteTask()', () => {
  test('remove an object from tasksArray', () => {
    document.body.innerHTML = `
    <div>
    <input type="text" class="input" placeholder="Add to your list...">
  </div>
  <ul class="taskContainer">
  <li><label class="flex task">
  <input type="checkbox"  class="check-box"">
  <i class="fa fa-check checkIcon></i>
  <p class="task-description"></p>
  </label>
  <div class="edit-container">
  <i class="fa fa-ellipsis-v editIcon icon"></i>
  <i class="fa fa-trash deleteIcon"></i>
 </div>
 </li>
  </ul>
     `;
    const deleteIcons = document.getElementsByClassName('deleteIcon');

    for (let i = 0; i < deleteIcons.length; i += 1) {
      deleteIcons[i].addEventListener('click', deleteTask);
    }

    const firstElementIcon = deleteIcons[0];
    firstElementIcon.click();
    const firstDescription = firstElementIcon.parentElement.firstElementChild.lastElementChild;
    expect(document.getElementsByTagName('p')).not.toContain(firstDescription);
  });
});

describe('Add object to taskArray', () => {
  test('Add object to the tasksArray', () => {
    document.body.innerHTML = `
    <div>
    <input type="text" class="input" placeholder="Add to your list...">
</div>
<ul class="taskContainer"></ul>
     `;
    const addObject = document.getElementsByClassName('input')[0];

    addObject.value = 'Go groceries shopping!';
    const taskContainer = document.getElementsByClassName('taskContainer');
    addObject.addEventListener('click', () => addTask);
    expect(taskContainer.innerHTML).toBe(`
     <li><label class="flex task">
     <input type="checkbox"  data-action="uncheck" class="check-box">
     <i class="fa fa-check checkIcon"></i>
     <p class="task-description">${'Go groceries shopping!'}</p>
     </label>
     <div class="edit-container">
     <i class="fa fa-ellipsis-v editIcon icon"></i>
     <i class="fa fa-trash deleteIcon"></i>
    </div>
    </li>
    `);
  });
});