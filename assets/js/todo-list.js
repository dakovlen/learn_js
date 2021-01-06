let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
  priority.classList.toggle('is-important');
};

form.onsubmit = function (evt) {
  evt.preventDefault();
  let newElement = document.createElement('li');
  
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
    newElement.classList.toggle('is-important');
  } else {
    priority.textContent = 'Обычная задача';
  }
  
  list.append(newElement);
  newElement.textContent = input.value; 
  newElement.value = '';
  list.append(newElement);
};