/* eslint no-restricted-globals: "off", curly: "error" */

import {
  addNewEvents,
  deleteAllElements,
  deleteListEvents,
  dragDropEvents,
  editListEvents,
  listCompleteEvents,
} from './elemevent.js';
import List from './root.js';

export const createList = (list) => {
  const divContainer = document.createElement('div');
  const li = document.createElement('li');
  const checkValue = list.completed === true ? 'checked' : '';
  const checkClass = list.completed === true ? 'marked' : '';
  divContainer.classList.add('div-container');
  li.classList.add('task-item');

  li.innerHTML = `
          <label class='task-label'>
            <input class='checkbox' ${checkValue} type='checkbox'>
            <input class='list-description ${checkClass}' type='text' value='${list.description}'>
            <input type='hidden' class='' value='${list.index}'>
          </label>
          <i class='icon-ellipsis-vertical'></i>
          <i class='icon-trash'></i>`;

  divContainer.appendChild(li);

  return divContainer;
};

export function setEventListeners() {
  dragDropEvents();
  listCompleteEvents();
  addNewEvents();
  editListEvents();
  deleteListEvents();
  deleteAllElements();
}

export const displayList = (taskList) => {
  const listUl = document.querySelector('.task-display');

  taskList.forEach((element) => {
    const div = createList(element);
    listUl.appendChild(div);
  });
};

export function addNewList() {
  const input = document.querySelector('#Task-input');
  const listUl = document.querySelector('.task-display');
  let listArr = [];

  if (localStorage.getItem('lists')) {
    listArr = JSON.parse(localStorage.getItem('lists'));
  }

  listArr.push(new List(input.value, false, listArr.length + 1));
  input.value = '';
  listUl.innerHTML = '';
  displayList(listArr);
  setEventListeners();
}

export function deleteList(event) {
  const listUl = document.querySelector('.task-display');
  const removeDiv = event.target.parentNode.parentNode;

  listUl.removeChild(removeDiv);
}

export function cleanMarkedElem() {
  const listUl = document.querySelector('.task-display');
  const removeTasks = document.querySelectorAll('.marked');

  removeTasks.forEach((element) => {
    const removeDiv = element.parentElement.parentElement.parentElement;
    listUl.removeChild(removeDiv);
  });
}
