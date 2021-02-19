  /* Factory function for constructing to-dos   */

  const makeToDo = (project, title, description, dueDate, priority) => {
    return {project, title, description, dueDate, priority};
  };



  /* Function for adding new to-dos to the DOM  */

  const addToDOM = (project, title, dueDate) => {
    const toDoContainer = document.createElement('div');
    toDoContainer.classList.add('toDoContainer');
    document.body.appendChild(toDoContainer);

    const newToDo = document.createElement('div');
    newToDo.classList.add('toDo');
    toDoContainer.appendChild(newToDo);

    const toDoProjectContainer = document.createElement('div');
    toDoProjectContainer.classList.add('toDoProjectContainer');
    newToDo.appendChild(toDoProjectContainer);

    const toDoProject = document.createElement('h5');
    toDoProject.classList.add('toDoProject');
    Boolean(project)
    ? toDoProject.textContent = project
    : toDoProject.textContent = 'Unsorted';
    toDoProjectContainer.appendChild(toDoProject);

    const toDoTitleContainer = document.createElement('div');
    toDoTitleContainer.classList.add('toDoTitleContainer');
    newToDo.appendChild(toDoTitleContainer);

    const toDoTitle = document.createElement('h3');
    toDoTitle.classList.add('toDoTitle');
    toDoTitle.textContent = `You have to: ${title}.`;
    toDoTitleContainer.appendChild(toDoTitle);

    const toDoDueDateContainer = document.createElement('div');
    toDoDueDateContainer.classList.add('toDoDueDateContainer');
    newToDo.appendChild(toDoDueDateContainer);

    const toDoDueDate = document.createElement('h4');
    toDoDueDate.classList.add('toDoDueDate');
    toDoDueDate.textContent = `Get this done by: ${dueDate}`;
    newToDo.appendChild(toDoDueDate);
  };


export {makeToDo, addToDOM};
