document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <button class="action-btn check-btn" data-action="complete" data-index="${index}">
                    <i class="fas fa-check"></i>
                </button>
                <span class="todo-text">${todo.text}</span>
                <button class="action-btn edit-btn" data-action="edit" data-index="${index}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn delete-btn" data-action="delete" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            todoList.appendChild(li);
        });
    }

    function addTodo() {
        const text = todoInput.value.trim();
        if (text) {
            todos.push({ text, completed: false });
            todoInput.value = '';
            saveTodos();
            renderTodos();
        }
    }

    function handleActions(e) {
        const target = e.target.closest('[data-action]');
        if (!target) return;

        const action = target.dataset.action;
        const index = target.dataset.index;

        if (action === 'complete') {
            todos[index].completed = !todos[index].completed;
            saveTodos();
            renderTodos();
        } else if (action === 'edit') {
            const newText = prompt('Edit task:', todos[index].text);
            if (newText !== null) {
                todos[index].text = newText.trim();
                saveTodos();
                renderTodos();
            }
        } else if (action === 'delete') {
            if (confirm('Are you sure you want to delete this task?')) {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            }
        }
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });
    todoList.addEventListener('click', handleActions);

    // Initial render
    renderTodos();
});