export default class StorageManager {
    static save = (tasks) => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
    // static save() {
    //   let books;
    //   if (localStorage.getItem('tasks') === null) {
    //     books = [];
    //   } else {
    //     books = JSON.parse(localStorage.getItem('tasks'));
    //   }
  
    //   return books;
    // }

    // static addBook(book) {
    //   const books = StorageManager.save();
    //   books.push(book);
    //   localStorage.setItem('tasks', JSON.stringify(books));
    // }
  
    // static removeBook(elem) {
    //   const books = StorageManager.save();
    //   books.splice(parseInt(elem.id), 1);
    //   localStorage.setItem('tasks', JSON.stringify(books));
    // }
  }