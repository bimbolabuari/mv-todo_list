// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import header from './header.js';
import form from './input.js';
import footer from './footer.js';

const startApp = () => {
  const tasksArray = [
    {
      description: 'Go groceries shopping',
      completed: false,
      index: 0,
    },
    {
      description: 'Wash the plates',
      completed: false,
      index: 1,
    },
    {
      description: 'Do my laundry',
      completed: false,
      index: 2,
    },
  ];
  const taskContainer = document.createElement('ul');

  const createTaskElement = (task) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('flex', 'tasklist', 'justify-content');
    taskElement.innerHTML = `
          <label class="flex task">
          <input type="checkbox" value='${task.completed}' data-action="complete">
          <p>${task.description}</p>
          </label>
          <i class="fa fa-ellipsis-v icon" data-action="delete"></i>
          `;
    return taskElement;
  };

  const displayTask = (task, taskContainer) => {
    const newTaskElement = createTaskElement(task);
    taskContainer.appendChild(newTaskElement);
  };

  tasksArray.forEach((task) => {
    displayTask(task, taskContainer);
  });

  const displayPage = () => {
    const mainContainer = document.querySelector('#content');
    mainContainer.append(header, form, taskContainer, footer);
  };

  displayPage();
};

export default startApp;