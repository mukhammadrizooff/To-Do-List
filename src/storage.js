export default function Storage(taskList) {
  localStorage.setItem('lists', JSON.stringify(taskList));
}
