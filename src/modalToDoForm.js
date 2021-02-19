const toDoModal = document.createElement('div');
toDoModal.classList.add('modal');
toDoModal.setAttribute('id', 'toDoModal');

const toDoModalContent = document.createElement('div');
toDoModalContent.classList.add('modal-content');
toDoModal.appendChild(toDoModalContent);

const closeButton = document.createElement('span');
closeButton.classList.add('closeButton');
closeButton.textContent = &times;
toDoModalContent.appendChild(closeButton);

const toDoForm = document.createElement('form');
toDoForm.classList.add('toDoForm');
