export default function dropElements(dragTask, currentTask) {
    const oldTask = currentTask;
    const oldContainer = currentTask.parentNode;
    const newTask = dragTask;
    const newContainer = dragTask.parentNode;
    newContainer.appendChild(oldTask);
    oldContainer.appendChild(newTask);
  }