import { getTasksArray, setTasksArray } from './tasks.js';

const updateStatus = (id, taskDescription, checkIcon, taskCheck) => {
  let currentTask;
  const tasksArray = getTasksArray();
  const newTasksArray = tasksArray.map((task) => {
    if (task.id === id) {
      task.changeCompletedStatus();
      currentTask = task;
    }
    return task;
  });
  setTasksArray(newTasksArray);

  // currentTask.changeCompletedStatus();
  if (currentTask.completedStatus) {
    taskDescription.classList.add('checked');
    taskCheck.classList.add('none');
    checkIcon.classList.remove('none');
  } else {
    taskDescription.classList.remove('checked');
    taskCheck.classList.remove('none');
    checkIcon.classList.add('none');
  }
};

export default updateStatus;