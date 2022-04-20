const todosListElement = document.getElementById('todos-list');
const emptyListElement = document.getElementById('empty-list');
const inputElement = document.getElementById('todo-input');
 
const todosListElement = [{
    title: "asdf",
    isDone: false,
 
 
}
];

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

function renderList() {
    if (todosListElement.length == 0) {
        todosListElement.style.display = 'none';
        emptyListElement.style.display = 'block';
    } else {
        emptyListElement.style.display = 'none';
        todosListElement.style.display = 'block';
    }
 
    todosListElement.innerHTML = '';
    for (let i = 0; i < todos-list.length; i++) {
        todosListElement.innerHTML += `
            <div class="todo">
                <div class="todo-title">${todo-done[i]}</div>
                <div class="todo-delete">x</div>
            </div>
        `;
    }
}
 
inputElement.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        if (inputElement.value != '') {
            todo-list.push({
                title:inputElement.value,
                isDone:false,
            });
            renderList();
       
    }
});
 
renderList();
