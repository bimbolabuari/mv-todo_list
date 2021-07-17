const generateId = () => (Math.random() + 1).toString(36).substring(7);

export const Task = (description) => {
  const completedStatus = false;
  const id = generateId();
  function changeCompletedStatus() {
    this.completedStatus = !this.completedStatus;
  }
  return {
    description, completedStatus, id, changeCompletedStatus,
  };
};

const taskOne = Task('Go groceries shopping');
const taskTwo = Task('Wash the plates');
const taskThree = Task('Do my laundry');

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
          <i class="fa fa-ellipsis-v editIcon icon" data-action="edit" data-task-id="${task.id}"></i>
          <i class="fa fa-trash deleteIcon icon none" data-action="delete" data-task-id="${task.id}"></i>
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
    tasksArray = [taskOne, taskTwo, taskThree];
  } else {
    tasksArray = JSON.parse(localStorage.getItem('tasksArray'));
  }
  return tasksArray;
};

export const setTasksArray = (newTasksArray) => {
  localStorage.setItem('tasksArray', JSON.stringify(newTasksArray));
};
