const todoText =document.getElementById('todoText');
const todoList = document.getElementById('todoList');

let todos = [];

function renderTodoList(clearText=true){

    if(clearText){
        todoText.value="";
    }
    todoList.innerHTML="";
    todos.forEach((todo, id)=>{
        addTodoToList(todo, id);
    });
}

function addTodoToList(todo, id){
    const todoItem = document.createElement('div');
    todoItem.classList.add("todo-item");
    todoItem.innerHTML=`
    <span>\t${todo}\t</span>
    <button id="editButton" onclick="handleEditButtonClick(${id});">編輯</button>
     <button id="deleteButton" onclick="handleDeleteButtonClick(${id});">刪除</button>
    `;
    todoList.appendChild(todoItem);
}
function handleAddButtonClick(){
    const newTodo = todoText.value.trim();
    if(newTodo !==""){
        todos.push(newTodo);
        todoText.value="";
        renderTodoList();
    }
    addButton.innerText="新增";
}

function handleClearAllButtonClick(){
    todos=[];
    renderTodoList();
}
function handleEditButtonClick(id){

    todoText.value=todos[id];
    todos.splice(id, 1);
    renderTodoList(false);
    addButton.innerText="儲存";
    }


function handleDeleteButtonClick(id) {

        todoText.value = todos[id];
        todos.splice(id, 1);
        renderTodoList();
    }

