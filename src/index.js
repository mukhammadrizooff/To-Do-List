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

function tasktemplate(listItem) {
  return `
  <div class="line">
    <input type="checkbox">
    <p>${listItem.description}</p>
    <i class="fas fa-ellipsis-v"></i>
  </div>
  `;
} 
const rootList = document.querySelector('.list-container');

listData.forEach((listItem) => {
  const article = document.createElement('article');
  article.innerHTML = tasktemplate(listItem);
  rootList.appendChild(article);
});
