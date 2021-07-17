import reorderTasks from './sort.js';
import { getTasksArray, setTasksArray, displayTaskArray } from './tasks.js';

export const reRenderTask = (tasks, taskContainerEl) => {
  while (taskContainerEl.firstChild) {
    taskContainerEl.removeChild(taskContainerEl.firstChild);
  }
  displayTaskArray(tasks, taskContainerEl);
};

const dragAndDropHandler = () => {
  let taskDragged;
  document.addEventListener('dragstart', (event) => {
    if (event.target.dataset.action === 'drag') {
      taskDragged = event.target;
      taskDragged.classList.add('dragstart');
    }
  }, false);

  document.addEventListener('dragover', (event) => {
    event.preventDefault();
  }, false);

  document.addEventListener('drop', (event) => {
    event.preventDefault();
    taskDragged.classList.remove('dragstart');
    if (event.target.dataset.action === 'drag') {
      let tasksArray = getTasksArray();
      tasksArray = reorderTasks(tasksArray, taskDragged.id, event.target.id);
      const taskContainer = document.querySelector('ul.taskContainer');
      reRenderTask(tasksArray, taskContainer);
      setTasksArray(tasksArray);
    }
  }, false);
};

export default dragAndDropHandler;
