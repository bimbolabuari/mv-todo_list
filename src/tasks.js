import { v4 as uuidv4 } from 'uuid';

const generateIndex = () => {
  if (localStorage.getItem('tasksArray') === null) {
    return 0;
  }
  const storedTasksArray = JSON.parse(localStorage.getItem('tasksArray'));
  return storedTasksArray.length;
};

export const Task = (taskData) => {
  const {
    description, completedStatus = false, id = uuidv4(), index = generateIndex(),
  } = taskData;
  function changeCompletedStatus() {
    this.completedStatus = !this.completedStatus;
  }
  function setDescription(newDescription) {
    this.description = newDescription;
  }
  return {
    description, completedStatus, id, changeCompletedStatus, setDescription, index,
  };
};

const parseTasks = (tasks) => tasks.map(Task);

let tasksArray;

const createTaskElement = (task) => {
  const isCompleted = task.completedStatus;
  const taskElement = document.createElement('li');
  taskElement.id = `${task.id}`;
  taskElement.setAttribute('draggable', true);
  taskElement.setAttribute('data-action', 'drag');
  taskElement.classList.add('flex', 'tasklist', 'justify-content');
  taskElement.innerHTML = `
          <label class="flex task">
          <input type="checkbox" value='${isCompleted}' data-action="uncheck" class="check-box ${isCompleted ? 'none' : ''}" data-task-id="${task.id}">
          <i class="fa fa-check checkIcon ${isCompleted ? '' : 'none'}"></i>
          <p class="task-description ${isCompleted ? 'checked' : ''}">${task.description}</p>
          </label>
          <div data-action='edit' data-task-id="${task.id}" class="'${isCompleted}' edit-container">
          <i class="fa fa-ellipsis-v editIcon icon ${isCompleted ? 'none' : ''}" data-task-id="${task.id}"></i>
          <i class="fa fa-trash deleteIcon ${isCompleted ? '' : 'none'}" data-action="delete" data-task-id="${task.id}"></i>
         </div>
          `;
  return taskElement;
};

const displayTask = (task, taskContainerEl) => {
  const newTaskElement = createTaskElement(task);
  taskContainerEl.appendChild(newTaskElement);
};

export const displayTaskArray = (tasks, taskContainerEl) => {
  tasks.forEach((task) => {
    displayTask(task, taskContainerEl);
  });
};

export const getTasksArray = () => {
  if (localStorage.getItem('tasksArray') === null) {
    tasksArray = [];
  } else {
    tasksArray = JSON.parse(localStorage.getItem('tasksArray'));
    tasksArray = parseTasks(tasksArray);
  }
  return tasksArray;
};

export const setTasksArray = (newTasksArray) => {
  localStorage.setItem('tasksArray', JSON.stringify(newTasksArray));
};

export const deleteCompletedTasks = () => {
  tasksArray = getTasksArray();
  tasksArray = tasksArray.filter((task) => task.completedStatus !== true);
  setTasksArray(tasksArray);
  return tasksArray;
};
