import todo from '../modules/todo.js';

const input = document.querySelector('#list');
const activity = () => {
  let addActivity = '';

  for (let i = 0; i < todo.length; i += 1) {
    const list = `
        <div class = 'activity'> 
          <p> <input type ='checkbox'>${todo[i].description}</p>
      
        </div>
        `;

    addActivity += list;
  }

  input.innerHTML = addActivity;
};

activity();
