import {newProjectButton, newToDoButton} from './landingPage.js';
import functions from './functions.js';


window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  // landingPage();
});

const toDoModal = document.getElementById('toDoModal');
const projectModal = document.getElementById('projectModal');
const closeButton = document.getElementsByClassName('closeButton')[0];

newToDoButton.addEventListener('click', () => {
  toDoModal.style.display = 'block';
});

newProjectButton.addEventListener('click', () => {
  projectModal.style.display= 'block';
});

closeButton.addEventListener('click', () => {
  toDoModal.style.display = 'none';
  projectModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === toDoModal || e.target === projectModal) {
    toDoModal.style.display = 'none';
    projectModal.style.display = 'none';
  }
})



