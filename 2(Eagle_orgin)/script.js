// 获取所需的元素
const todoText = document.getElementById('todoText');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
const clearAllButton = document.getElementById('clearAll');

// 用于存储待办事项的数组
let todos = [];

function handleAddButtonClick() {
    const newTodo = todoText.value.trim();
    if (newTodo !== '') {
        todos.push(newTodo);
        todoText.value = '';
        renderTodoList();
    }
    addButton.innerText = '新增';
}

function handleClearAllButtonClick() {
    todos = [];
    renderTodoList();
}

function handleEditButtionClick(id) {
    if (id >= 0 && id < todos.length) {
        // 将待办事项文本发送回输入字段以供编辑
        todoText.value = todos[id];
        todos.splice(id, 1);
        renderTodoList(false);
        addButton.innerText = '儲存';
    }
}

function handleDeleteButtionClick(id) {
    if (id >= 0 && id < todos.length) {
        todos.splice(id, 1);
        renderTodoList();
    }
}

// 函数：渲染待办事项列表
function renderTodoList(clearText = true) {
    console.log("render todo list");
    if (clearText) {
        todoText.value = '';
    }
    todoList.innerHTML = '';
    todos.forEach((todo, id) => {
        addTodoToList(todo, id);
    });
}

// 函数：添加待办事项到列表
function addTodoToList(todo, id) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
        <span>${todo}</span>
        <button class="edit-button" onclick="handleEditButtionClick(${id})">編輯</button>
        <button class="delete-button" onclick="handleDeleteButtionClick(${id})">刪除</button>
    `;
    // todoItem.attributes.id = `todo-${id}`;
    todoList.appendChild(todoItem);
}

