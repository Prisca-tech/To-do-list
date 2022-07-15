export const todocontainer = document.getElementById('list');
export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];