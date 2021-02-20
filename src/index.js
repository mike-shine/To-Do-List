import {newProjectButton, newToDoButton} from './landingPage.js';
import {makeToDo, addToDOM, newToDoInfo} from './functions.js';


// window.addEventListener('DOMContentLoaded', (e) => {
//   // e.preventDefault();
//   // landingPage();
// });

const toDoModal = document.getElementById('toDoModal');
const projectModal = document.getElementById('projectModal');
const closeButton0 = document.getElementsByClassName('closeButton')[0];
const closeButton1 = document.getElementsByClassName('closeButton')[1];
const submitToDo = document.getElementById('submitToDo');

newToDoButton.addEventListener('click', () => {
  toDoModal.style.display = 'block';
});

newProjectButton.addEventListener('click', () => {
  projectModal.style.display= 'block';
});

closeButton0.addEventListener('click', () => {
  toDoModal.style.display = 'none';
});

closeButton1.addEventListener('click', () => {
  projectModal.style.display = 'none';
});


window.addEventListener('click', (e) => {
  if (e.target === toDoModal || e.target === projectModal) {
    toDoModal.style.display = 'none';
    projectModal.style.display = 'none';
  }
})

submitToDo.addEventListener('click', () => {
  toDoModal.style.display = 'none';
  let newAddition = makeToDo(newToDoInfo());
  addToDOM(newAddition.project, newAddition.title, newAddition.dueDate);
});



