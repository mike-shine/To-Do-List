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

const lineBreak = document.createElement('br');
document.body.appendChild(lineBreak);

const projectLabel = document.createElement('label');
projectLabel.textContent = 'Select a project to view: ';
const projectSelector = document.createElement('select');
projectLabel.appendChild(projectSelector);
const unsortedOption = document.createElement('option');
unsortedOption.textContent = '';
projectSelector.appendChild(unsortedOption);

const aroundTheHouseOption = document.createElement('option');
aroundTheHouseOption.textContent = 'Around the House';
projectSelector.appendChild(aroundTheHouseOption);
const backyardShedOption = document.createElement('option');
backyardShedOption.textContent = 'Backyard Shed';
projectSelector.appendChild(backyardShedOption);

document.body.appendChild(projectLabel);


const mowLawn = makeToDo('Around the House', 'mow the lawn', 'cut the blades of grass shorter', 'next thursday', 'low');

const washDishes = makeToDo('Around the House', 'wash the dirty dishes', 'pretty self-explanatory', 'saturday', 'medium');

const getShedSupplies = makeToDo('Backyard Shed', 'get supplies', 'go to Lowe\'s for lumber and insulation', 'tomorrow at the latest!', 'high');

const climbEverest = makeToDo('', 'climb Mt. Everest', 'descriptions for to-dos are kind of stupid', 'the end of 2022', 'medium');

addToDOM(mowLawn.project, mowLawn.title, mowLawn.dueDate);
addToDOM(washDishes.project, washDishes.title, washDishes.dueDate);
addToDOM(getShedSupplies.project, getShedSupplies.title, getShedSupplies.dueDate);
addToDOM(climbEverest.project, climbEverest.title, climbEverest.dueDate);



export {newProjectButton, newToDoButton};

