import './index.css';
import Storage from './storage.js';
import { displayList, setEventListeners } from './display.js';

let taskList = [];

if (localStorage.getItem('lists')) {
  taskList = JSON.parse(localStorage.getItem('lists'));
  displayList(taskList);
  setEventListeners();
} else {
  Storage(taskList);
  displayList(taskList);
  setEventListeners();
}