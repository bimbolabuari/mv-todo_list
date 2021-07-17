// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import header from './header.js';
import form from './input.js';
import footer from './footer.js';
import updateStatus from './updateStatus.js';
import dragAndDropHandler from './drag.js';
import { getTasksArray, displayTaskArray } from './tasks.js';

const startApp = () => {
  const tasksArray = getTasksArray();
  // console.log(tasksArray);
  const taskContainer = document.createElement('ul');
  taskContainer.classList.add('taskContainer');

  displayTaskArray(tasksArray, taskContainer);

  const displayPage = () => {
    const mainContainer = document.querySelector('#content');
    mainContainer.append(header, form, taskContainer, footer);
  };

  displayPage();
  dragAndDropHandler();

  document.addEventListener('click', (event) => {
    if (!event.target.dataset.action) {
      return;
    }

    const { taskId } = event.target.dataset;

    if (event.target.dataset.action === 'uncheck') {
      const taskDescription = event.target.parentElement.querySelector('.task-description');
      const taskCheck = event.target.parentElement.querySelector('.check-box');
      const checkIcon = event.target.parentElement.querySelector('.checkIcon');
      updateStatus(taskId, taskDescription, tasksArray, checkIcon, taskCheck);
    }
  });
};

export default startApp;