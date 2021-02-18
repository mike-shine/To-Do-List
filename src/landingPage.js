import {makeToDo, addToDOM} from './functions.js';

const landingPage = () => {
  const header = document.createElement('h1')
  header.textContent = 'To-Do List';
  document.body.appendChild(header);

  const mowLawn = makeToDo('mow lawn', 'cut the blades of grass shorter', 'next thursday', 'low');

  addToDOM(mowLawn.title, mowLawn.dueDate);

}

export default landingPage;

