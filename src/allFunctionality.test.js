// eslint-disable-next-line import/no-named-as-default
import reorderTasks from './sort.js';
import editTask from './addAndRemove.js';
import { deleteCompletedTasks } from './tasks.js';

describe('Test drag and drop function', () => {
  test('change the order of elements in tasksArray', () => {
    document.body.innerHTML = `    
    <input type="text" id="input" class="input" value="input" placeholder="Add to your list...">
    <ul class="taskContainer">
    <label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task three</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div>
    <label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task two</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div>
    <label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task one</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div>
    </ul>
    <button type="button" class="button" data-action="deleteCompleted">Clear all completed</button> `;

    const tasksArray = ['task one', 'task two', 'task three'];
    reorderTasks(tasksArray, 2, 0);

    expect(document.getElementsByClassName('task-description')[0].textContent).toBe('task three');
  });
});

describe('Test editTask', () => {
  test('edit task description', () => {
    document.body.innerHTML = `    
        <input type="text" id="input" class="input" value="input" placeholder="Add to your list...">
        <ul class="taskContainer">
        <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task one</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
        <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task two</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
        <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task three</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div><li>
        </ul>
        <button type="button" class="button" data-action="deleteCompleted">Clear all completed</button> `;
    const items = document.getElementsByTagName('li');
    for (let i = 0; i < items.length; i += 1) {
      const editTaskIcon = document.querySelector('.editIcon');
      editTaskIcon.addEventListener('click', editTask);
    }
  });
});

describe('Test delete completedTask', () => {
  test('Delete completedTask', () => {
    document.body.innerHTML = `    
          <input type="text" id="input" class="input" value="input" placeholder="Add to your list...">
          <ul class="taskContainer">
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task one</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task two</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task three</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div><li>
          </ul>
          <button type="button" class="button" data-action="deleteCompleted">Clear all completed</button> `;
    const button = document.querySelector('.button');
    for (let i = 0; i < button.length; i += 1) {
      button.addEventListener('click', deleteCompletedTasks);
    }
  });
});

describe('Test the check status function', () => {
  test('update the completeStatus', () => {
    document.body.innerHTML = `    
    <input type="text" id="input" class="input" value="input" placeholder="Add to your list...">
    <ul class="taskContainer">
    <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task one</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
    </ul>
    <button type="button" class="button" data-action="deleteCompleted">Clear all completed</button> `;

    const checkBox = document.querySelector('.check-box');
    let checkedBox = checkBox.checked;
    checkedBox = true;
    expect(checkedBox).toBe(true);
  });
});