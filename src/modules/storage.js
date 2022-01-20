export default class StorageLocal {
  static save = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
 
  static load = () => {
    if (localStorage.getItem('tasks') !== null) { 
      return JSON.parse(localStorage.getItem('tasks'));  
    }  
    return [];
  };
}
