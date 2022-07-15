import { tasks } from './variables.js';

const deleteItem = (currentListItem) => {
  const paragraph = currentListItem.querySelector('p');
  const initial = paragraph.textContent;

  tasks.forEach((element) => {
    if (element.description === initial) {
      tasks.splice(tasks.indexOf(element), 1);
    }
  });

  tasks.forEach((element, ind) => {
    element.index = ind + 1;
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
  currentListItem.remove();
};

export default deleteItem;