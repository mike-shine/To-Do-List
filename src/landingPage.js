import {makeToDo, addToDOM} from './functions.js';

const header = document.createElement('h1')
header.textContent = 'To-Do List';
document.body.appendChild(header);

const subHeader = document.createElement('h2');
subHeader.textContent = 'Create a new project, or create a new to-do:';
document.body.appendChild(subHeader);

const newProjectButton = document.createElement('button');
newProjectButton.classList.add('newProjectButton');
newProjectButton.textContent = 'New project';
document.body.appendChild(newProjectButton);

const newToDoButton = document.createElement('button');
newToDoButton.classList.add('newToDoButton');
newToDoButton.textContent = 'New to-do';
document.body.appendChild(newToDoButton);

const mowLawn = makeToDo('mow the lawn', 'cut the blades of grass shorter', 'next thursday', 'low');

const washDishes = makeToDo('wash the dirty dishes', 'pretty self-explanatory', 'saturday', 'medium');

const paintTheFence = makeToDo('finish painting the backyard fence', 'I think that lovely shade of purple will be just right', 'tomorrow at the latest!', 'high');

addToDOM(mowLawn.title, mowLawn.dueDate);
addToDOM(washDishes.title, washDishes.dueDate);
addToDOM(paintTheFence.title, paintTheFence.dueDate);



export {newProjectButton, newToDoButton};

