import './index.css';

const listData = [
  {
    description: 'Physical training',
    completed: false,
    index: 0,
  },
  {
    description: 'Market',
    completed: false,
    index: 1,
  },
  {
    description: 'Learning',
    completed: false,
    index: 2,
  },
];

let listMark = `
  <div class="line title">
    <p>To Do List</p>
    <i class="fas fa-sync"></i>
  </div>
  <div class="line">
    <input class="div-input" type="text" placeholder="Add to your list">
    <i class="fas fa-level-down-alt rotate"></i>
  </div>
`;

listData.forEach((listItem) => {
  listMark += `
      <div class="line">
        <input type="checkbox">
        <p>${listItem.description}</p>
        <i class="fas fa-ellipsis-v"></i>
      </div>
  `;
});

listMark += `
    <div class="line remove">
      <p>Clear All Completed</p>
    </div>
`;

const rootList = document.querySelector('.container');
rootList.innerHTML = listMark;
