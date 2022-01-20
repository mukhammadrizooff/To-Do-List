import Task from './root.js';
import StorageLocal from './storage.js';

export default class ListControl {
  constructor() {
    this.tasks = StorageLocal.load();
  }

  getTasks = () => this.tasks.sort((a, b) => a.index - b.index);

  addTask = (description, completed = false) => {
    const newTask = new Task(this.tasks.length + 1, description, completed);
    this.tasks.push(newTask);
    StorageLocal.save(this.tasks);
    return newTask;
  };

  removeList = (index) => {
    const newTasks = [];
    const taskIndex = index - 1;

    this.tasks.forEach((t, i) => {
      if (i < taskIndex) {
        newTasks.push(t);
      } else if (i > taskIndex) {
        t.index = i;
        newTasks.push(t);
      }
    });
    this.tasks = newTasks;
    StorageLocal.save(this.tasks);
  };

  updateTask = (index, description, completed) => {
    this.tasks[index - 1].description = description;
    this.tasks[index - 1].completed = completed;
    StorageLocal.save(this.tasks);

    return this.tasks[index - 1];
  };
}
