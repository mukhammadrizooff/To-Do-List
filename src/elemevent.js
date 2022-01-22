/* eslint no-restricted-globals: "off", curly: "error" */

import completedCheck from './marklist.js';
import Storage from './storage.js';
import dropElements from './draganddrop.js';
import { addNewList, deleteList, cleanMarkedElem } from './display.js';

function updateList() {
  const listcheckBoxI = document.querySelectorAll('.checkbox');
  const elemDescription = document.querySelectorAll('.list-description');
  const newArrayElem = [];
  for (let i = 0; i < listcheckBoxI.length; i += 1) {
    newArrayElem.push({
      description: elemDescription[i].value,
      completed: listcheckBoxI[i].checked,
      index: i + 1,
    });
  }
  Storage(newArrayElem);
}

export const dragDropEvents = () => {
  const elements = document.querySelectorAll('.task-item');
  const containers = document.querySelectorAll('.div-container');
  const listArrayElem = Array.from(elements);
  const containerArrayElem = Array.from(containers);

  let dragTask = null;

  listArrayElem.forEach((element) => {
    element.setAttribute('draggable', 'true');
    element.addEventListener('dragstart', () => {
      dragTask = element;
    });
    element.addEventListener('dragend', () => {
      dragTask = null;
    });
  });

  containerArrayElem.forEach((container) => {
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    container.addEventListener('dragenter', (e) => {
      e.preventDefault();
    });
    container.addEventListener('drop', () => {
      dropElements(dragTask, container.firstElementChild);
      updateList();
    });
  });
};

export const listCompleteEvents = () => {
  const allCheckboxes = document.querySelectorAll('.checkbox');
  const allCheckboxesArray = Array.from(allCheckboxes);

  allCheckboxesArray.forEach((inputBox) => {
    inputBox.addEventListener('change', (e) => {
      completedCheck(e);
      updateList();
    });
  });
};

export const addNewEvents = () => {
  const input = document.querySelector('#Task-input');

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value !== '' && e.target.matches('#Task-input')) {
      addNewList();
      updateList();
    }
  });
};

export const editListEvents = () => {
  const listsInput = document.querySelectorAll('.list-description');
  const arrInput = Array.from(listsInput);

  arrInput.forEach((input) => {
    input.addEventListener('input', () => {
      updateList();
    });
  });
};

export const deleteListEvents = () => {
  const lists = document.querySelectorAll('.icon-trash');
  const listArr = Array.from(lists);

  listArr.forEach((lists) => {
    lists.addEventListener('click', (e) => {
      deleteList(e);
      updateList();
    });
  });
};

export const deleteAllElements = () => {
  const clearLists = document.querySelector('#clear-btn');

  clearLists.addEventListener('click', () => {
    cleanMarkedElem();
    updateList();
  });
};
