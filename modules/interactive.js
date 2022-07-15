import { tasks } from './variables.js';

const completedTask = (listItem, e) => {
  const paragraph = listItem.querySelector('p');
  paragraph.classList.toggle('cancelList');
  let newTodo = {};
  tasks.forEach((element) => {
    if (element.description === paragraph.textContent) {
      newTodo = element;
    }
  });

  if (e.target.checked) {
    newTodo.completed = true;
  } else {
    newTodo.completed = false;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const checkCompletedTask = (checkbox, listItem) => {
  const paragraph = listItem.querySelector('p');
  let newTodo = {};
  tasks.forEach((element) => {
    if (element.description === paragraph.textContent) {
      newTodo = element;
    }
  });

  if (newTodo.completed) {
    checkbox.checked = true;
    paragraph.classList.add('cancelList');
  }
};

export { completedTask, checkCompletedTask };