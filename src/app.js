// eslint-disable-next-line no-unused-vars
import './style.css';
import form from './input.js';
import footer from './footer.js';
import updateStatus from './updateStatus.js';
import dragAndDropHandler, { reRenderTask } from './drag.js';
import {
  getTasksArray, displayTaskArray, deleteCompletedTasks, setTasksArray, Task,
} from './tasks.js';
import { editTask, deleteTask } from './addAndRemove.js';

const taskContainer = document.querySelector('.taskContainer');

export const addTask = (event) => {
  event.preventDefault();
  const description = document.querySelector('.input').value;
  const newTask = Task({ description });
  const currentTasksArray = getTasksArray();
  const newTasks = currentTasksArray.concat(newTask);
  setTasksArray(newTasks);
  reRenderTask(newTasks, taskContainer);
  form.reset();
};

const startApp = () => {
  displayTaskArray(getTasksArray(), taskContainer);

  const displayPage = () => {
    const mainContainer = document.querySelector('#content');
    mainContainer.append(taskContainer, footer);
  };

  displayPage();
  dragAndDropHandler();

  form.addEventListener('submit', addTask);

  document.addEventListener('click', (event) => {
    if (!event.target.dataset.action) {
      return;
    }

    const { taskId } = event.target.dataset;

    if (event.target.dataset.action === 'uncheck') {
      const taskDescription = event.target.parentElement.querySelector('.task-description');
      const taskCheck = event.target.parentElement.querySelector('.check-box');
      const checkIcon = event.target.parentElement.querySelector('.checkIcon');
      updateStatus(taskId, taskDescription, checkIcon, taskCheck);
    }

    if (event.target.dataset.action === 'delete') {
      deleteTask(taskId, getTasksArray());
    }

    if (event.target.dataset.action === 'edit') {
      const taskDescription = event.target.parentElement.querySelector('.task-description');
      const editIcon = event.target.parentElement.querySelector('.editIcon');
      const deleteIcon = event.target.parentElement.querySelector('.deleteIcon');
      editTask(taskDescription, editIcon, deleteIcon, getTasksArray(), taskId);
    }

    if (event.target.dataset.action === 'deleteCompleted') {
      const uncompletedTasks = deleteCompletedTasks();
      reRenderTask(uncompletedTasks, taskContainer);
    }
  });
};

export default startApp;
