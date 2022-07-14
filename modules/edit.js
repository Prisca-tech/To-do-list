import { task } from './variables';

const edit = (currentListItem) =>{
    currentListItem.querySelector('.bi-three-dots-vertical').style.display = 'none';
    currentListItem.querySelector('.bi-trash').style.display = 'block';
    const paragraph = currentListItem.querySelector('p');
    const initial = paragraph.textContent;
    paragraph.contentEdit = true;
    paragraph.focus();
    paragraph.addEventListener('keypress', (e) => {
        currentListItem.querySelector('.bi-three-dots-vertical').style.display = 'block';
        currentListItem.querySelector('.bi-trash').style.display = 'none';
        if (e.key === 'Enter') {
            paragraph.contentEdit = false;
            const elementValue = paragraph.textContent;
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