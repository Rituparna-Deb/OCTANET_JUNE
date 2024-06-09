const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', addTodo);

function addTodo() {
  const newTodo = todoInput.value.trim();

  if (newTodo.length > 0) {
    const listItem = document.createElement('li');
    listItem.innerText = newTodo;

    listItem.addEventListener('click', toggleTodo);

    todoList.appendChild(listItem);
    todoInput.value = '';
  }
}

function toggleTodo(event) {
  event.target.classList.toggle('completed');
}