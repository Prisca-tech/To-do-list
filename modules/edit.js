import { tasks } from './variables.js';

const edit = (currentListItem) => {
  currentListItem.querySelector('.bi-three-dots-vertical').style.display = 'none';
  currentListItem.querySelector('.bi-trash').style.display = 'block';
  const paragraphTag = currentListItem.querySelector('p');
  const initial = paragraphTag.textContent;
  paragraphTag.contentEditable = true;
  paragraphTag.focus();
  paragraphTag.addEventListener('keypress', (eve) => {
    currentListItem.querySelector('.bi-three-dots-vertical').style.display = 'block';
    currentListItem.querySelector('.bi-trash').style.display = 'none';
    if (eve.key === 'Enter') {
      paragraphTag.contentEditable = false;
      const elementValue = paragraphTag.textContent;
      tasks.forEach((element) => {
        if (element.description === initial) {
          element.description = elementValue;
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      });
    }
  });
};

export default edit;