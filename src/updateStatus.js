const updateStatus = (id, taskDescription, tasksArray, checkIcon, taskCheck) => {
  const currentTaskIndex = tasksArray.findIndex((task) => task.id === id);
  tasksArray[currentTaskIndex].changeCompletedStatus();
  if (tasksArray[currentTaskIndex].completedStatus) {
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