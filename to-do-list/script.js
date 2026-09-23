let todos = JSON.parse(localStorage.getItem('todos')) || [];

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    todoList.innerHTML = '';
    
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

        const textSpan = document.createElement('span');
        textSpan.className = 'todo-text';
        textSpan.innerText = todo.text;
        textSpan.addEventListener('click', () => toggleTodo(index));

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTodo(index));

        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function addTodo(e) {
    e.preventDefault();
    const taskText = todoInput.value.trim();
    
    if (taskText === '') return;

    todos.push({
        text: taskText,
        completed: false
    });

    todoInput.value = '';
    saveToLocalStorage();
    renderTodos();
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveToLocalStorage();
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveToLocalStorage();
    renderTodos();
}

todoForm.addEventListener('submit', addTodo);

renderTodos();
