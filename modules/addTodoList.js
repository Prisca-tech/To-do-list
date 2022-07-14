import { todocontainer } from './variables.js';
import deleteItem from './removeTodo.js';
import edit from './edit.js';

const addTodoList = (value) => {
    todocontainer.innerHTML += ` <li class = 'list-item'><input type= 'checkbox' class='checkbox'><p class= 'todo-desc'>${value.description}</p>
    <i class = 'bi bi three-dots-vertical'></i><i class ='bi bi-trash'></i>
    `;

    const editIcon = Array.from(document.querySelectorAll('.bi-three-dots-vertical'));
    const deleteIcon = Array.from(document.querySelectorAll('.bi-trash'));
    const checkBox = Array.from(document.querySelectorAll('.checkbox'))

    editIcon.forEach((icon) => {
        icon.addEventListener('click', () => {
          const currentListItem = icon.closest ('.list-item');
          edit(currentListItem);
        });
    });

    deleteIcon.forEach((icon) => {
        icon.addEventListener('click', () => {
            const currentListItem = icon.closest('.list-item');
            deleteItem(currentListItem);
        }); 
    });

    checkBox.forEach((check) => {
            const currentListItem = icon.closest ('.list-item');
            checkCompletedTask(check, currentListItem);
            check.addEventListener('change', (e) => {
            completedTask(currentListItem, e);
            });
    });
};

export default addTodoList