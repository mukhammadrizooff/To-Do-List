export default class DisplayManager {
    static reset = (element) => {
      element.innerHTML = '';
    };
  
    static displayTask = (parent, task) => {
      const taskDiv = DisplayManager.createHtml(parent, 'div', 'task');
      const taskInput = DisplayManager.createHtml(taskDiv, 'div', 'task_input');
  
      const input = DisplayManager.createHtml(taskInput, 'input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('class', `task_${task.index}_checkbox`);
  
      const inputSecond = DisplayManager.createHtml(taskInput, 'input');
      inputSecond.setAttribute('type', 'text');
      inputSecond.setAttribute('class', `task_${task.index} input_task`);
      inputSecond.dataset.id = task.index;
      inputSecond.value = task.description;
      inputSecond.id = `input_task_${task.index}`;
  
      const i = DisplayManager.createHtml(taskDiv, 'i', 'fas fa-ellipsis-v');
      i.setAttribute('class', 'fas fa-trash');
      i.id = `task_${task.index}`;
      i.dataset.id = task.index;
    };
  
    static createHtml = (parent, tag, className, content = null) => {
      const element = document.createElement(tag);
      element.className = className;
      element.innerHTML = content;
      parent.appendChild(element);
      return element;
    };
  }