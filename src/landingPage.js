import {makeToDo, addToDOM} from './functions.js';

const landingPage = () => {
  const test = document.createElement('div');
  test.textContent = 'This is coming from landingPage.js.';

  document.body.appendChild(test);

  const mowLawn = makeToDo('mow lawn', 'cut the blades of grass shorter', 'next thursday', 'low');
  console.log(mowLawn);

  // const toDo = (title, description, dueDate, priority) => {
  //   this.title = title;
  //   this.description = description;
  //   this.dueDate = dueDate;
  //   this.priority = priority;
  // }

  // const doTheDishes = new toDo('Do the dishes', 'self-explanatory', 'Next thursday', 'medium');

}

export default landingPage;

