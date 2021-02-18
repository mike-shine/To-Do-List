const function = () => {

  const toDo = (title, description, dueDate, priority) => {
    // this.title = title;
    // this.description = description;
    // this.dueDate = dueDate;
    // this.priority = priority;
    return {title, description, dueDate, priority};
  };

  const addToDOM = (title, dueDate) => {
    const newToDo = document.createElement('div');
    newToDo.classList.add('toDo');
    toDoContainer.appendChild(newToDo);

    const toDoTitleContainer = document.createElement('div');
    toDoTitleContainer.classList.add('toDoTitleContainer');
    newToDo.appendChild(toDoTitleContainer);

    const toDoTitle = document.createElement('h3');
    toDoTitle.classList.add('toDoTitle');
    toDoTitle.textContent = title;
    toDoTitleContainer.appendChild(toDoTitle);

    const toDoDueDateContainer = document.createElement('div');
    toDoDueDateContainer.classList.add('toDoDueDateContainer');
    newToDo.appendChild(toDoDueDateContainer);

    const toDoDueDate = document.createElement('h4');
    toDoDueDate.classList.add('toDoDueDate');
    toDoDueDate.textContent = dueDate;
    newToDo.appendChild(toDoDueDate);
  };


}