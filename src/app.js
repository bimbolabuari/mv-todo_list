// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import header from './header.js';
import form from './input.js';
import footer from './footer.js';

const startApp = () => {
  const tasksArray = [
    {
      description: 'Wash the plates',
      completed: false,
      index: 0,
    },
    {
      description: 'Wash the plates',
      completed: false,
      index: 1,
    },
    {
      description: 'Wash the plates',
      completed: false,
      index: 2,
    },
  ];
  const taskContainer = document.createElement('ul');

  const createTaskElement = (task) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('flex', 'tasklist');
    taskElement.innerHTML = `
          <div class="flex task">
          <input type="checkbox" value='${task.completed}' data-action="complete">
          <p>${task.description}</p>
          </div>
          <i class="fa fa-ellipsis-v icon" data-action="drag"></i>
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