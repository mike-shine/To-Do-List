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

const mowLawn = makeToDo('Around the House', 'mow the lawn', 'cut the blades of grass shorter', 'next thursday', 'low');

const washDishes = makeToDo('Around the House', 'wash the dirty dishes', 'pretty self-explanatory', 'saturday', 'medium');

const paintTheFence = makeToDo('Around the House', 'finish painting the backyard fence', 'I think that lovely shade of purple will be just right', 'tomorrow at the latest!', 'high');

const climbEverest = makeToDo('', 'climb Mt. Everest', 'descriptions for to-dos are kind of stupid', 'the end of 2022', 'medium');

addToDOM(mowLawn.project, mowLawn.title, mowLawn.dueDate);
addToDOM(washDishes.project, washDishes.title, washDishes.dueDate);
addToDOM(paintTheFence.project, paintTheFence.title, paintTheFence.dueDate);
addToDOM(climbEverest.project, climbEverest.title, climbEverest.dueDate);



export {newProjectButton, newToDoButton};

