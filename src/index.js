import landingPage from './landingPage.js';
import functions from './functions.js';


window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  landingPage();
});

const toDoModal = document.getElementById('toDoModal');
const projectModal = document.getElementById('projectModal');

newToDoButton.addEventListener('click', () => {
  toDoModal.style.display = 'block';
});

newProjectButton.addEventListener('click', () => {
  projectModal.style.display= 'block';
});



