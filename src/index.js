import landingPage from './landingPage.js';

landingPage();

const toDoContainer = document.createElement('div');
toDoContainer.classList.add('toDoContainer');
document.body.appendChild(toDoContainer);

// const mowLawn = new landingPage.toDo('Mow the lawn', 'cut the blades of grass shorter', '2/21/21', 'medium');



// addToDOM(mowLawn.title, mowLawn.dueDate);

// const addToDOM = (title, dueDate) => {
//   const newToDo = document.createElement('div');
//   newToDo.classList.add('toDo');
//   toDoContainer.appendChild(newToDo);

//   const toDoTitleContainer = document.createElement('div');
//   toDoTitleContainer.classList.add('toDoTitleContainer');
//   newToDo.appendChild(toDoTitleContainer);

//   const toDoTitle = document.createElement('h3');
//   toDoTitle.classList.add('toDoTitle');
//   toDoTitle.textContent = title;
//   toDoTitleContainer.appendChild(toDoTitle);

//   const toDoDueDateContainer = document.createElement('div');
//   toDoDueDateContainer.classList.add('toDoDueDateContainer');
//   newToDo.appendChild(toDoDueDateContainer);

//   const toDoDueDate = document.createElement('h4');
//   toDoDueDate.classList.add('toDoDueDate');
//   toDoDueDate.textContent = dueDate;
//   newToDo.appendChild(toDoDueDate);
// }

