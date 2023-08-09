
// let's start sabina! Be confident, you can do this. okay :)


let form = document.querySelector('form');
let newTask = document.querySelector('#new-task');
let inCompleteUl = document.querySelector('.task-box');
let completeUl = document.querySelector('.completedTask ul');


let createTask = function(task){
    let listItem = document.createElement('li');
    let label = document.createElement('label');
    let checkBox = document.createElement('input');

    label.innerHTML = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event){
    event.preventDefault();

    let listItem = createTask(newTask.value);
    inCompleteUl.appendChild(listItem);

    newTask.value = "";

    bindIncompleteTask(listItem, completeTask);
}

let bindIncompleteTask = function(taskItem, checkBoxClick){
    let checkBox = taskItem.querySelector('input[type = "checkbox"]');
    checkBox.onchange = checkBoxClick;
}

let completeTask = function(){
    let listItem = this.parentNode;
    let deleteButton = document.createElement('button');
    
    deleteButton.className = 'del';
    deleteButton.innerHTML = 'Delete';
    listItem.appendChild(deleteButton);

    let checkBox = listItem.querySelector('input[type = "checkbox"]');
    checkBox.remove();

    completeUl.appendChild(listItem);

    bindCompleteTask(listItem, deleteTask);
}

let bindCompleteTask = function(taskItem, deleteButtonClick){
    let deleteButton = taskItem.querySelector('.del');
    deleteButton.onclick = deleteButtonClick;
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

for(let i = 0; i < inCompleteUl.children.length ; i++){
    bindIncompleteTask(inCompleteUl.children[i], completeTask);
}
for(let i = 0; i < completeUl.children.length ; i++){
    bindCompleteTask(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);