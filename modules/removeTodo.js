import { task } from './variables.js';

const deleteItem = (currentListItem) => {
    const paragraph = currentListItem.querySelector('p');
    const initial = paragraph.textContent;

    task.forEach((element) => {
        if (element.description === initial) {
            task.splice(tasks.indexOf(element), 1);
        }
    });

    task.forEach((element, ind) => {
        element.index = ind + 1;
    });

    localStorage.setItem('task', JSON.stringify(tasks));
    currentListItem.remove();
};

export default deleteItem;