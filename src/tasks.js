const generateId = () => (Math.random() + 1).toString(36).substring(7);

export function Task(description) {
  this.description = description;
  this.completed = true;
  this.id = generateId();
  this.changeCompletedStatus = () => {
    this.completedStatus = !this.completedStatus;
  };
}

const taskOne = new Task('Go groceries shopping');
const taskTwo = new Task('Wash the plates');
const taskThree = new Task('Do my laundry');

let tasksArray;

const createTaskElement = (task) => {
  const taskElement = document.createElement('li');
  taskElement.id = `${task.id}`;
  taskElement.setAttribute('draggable', true);
  taskElement.setAttribute('data-action', 'drag');
  taskElement.classList.add('flex', 'tasklist', 'justify-content');
  taskElement.innerHTML = `
          <label class="flex task">
          <input type="checkbox" value='${task.completed}' data-action="uncheck" id="uncheck" data-task-id="${task.id}">
          <i class="fa fa-check checkIcon none"></i>
          <p class="task-description">${task.description}</p>
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
