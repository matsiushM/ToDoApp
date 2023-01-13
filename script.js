const buttonSave = document.querySelector("#saveButton");
const tabTask = document.querySelector("#tabTask");
const tabTaskFinished = document.querySelector("#tabTaskFinished");
const textInput = document.querySelector("#task");
let todos = [];
let point = 1;

const saveTask = (name) => {

    const task = {
        id: point,
        taskText: 'txt',
        isFinished: false,
    };


    const divTaskLine = document.createElement('div');
    const span = document.createElement('span');
    const idTask = document.createElement('span');
    const div = document.createElement('div');
    const buttonFinished = document.createElement("button");
    const buttonDelete = document.createElement("button");

    divTaskLine.classList.add('container-tab__line');
    buttonFinished.classList.add('container-tab__task__button__finished');
    buttonDelete.classList.add('container-tab__task__button__delete');

    buttonFinished.textContent = "FINISHED";
    buttonDelete.textContent = "DELETE";
    idTask.textContent = point;
    span.textContent = textInput.value.trim();
    div.appendChild(buttonFinished);
    div.appendChild(buttonDelete);
    divTaskLine.appendChild(idTask);
    divTaskLine.appendChild(span);
    divTaskLine.appendChild(div);

    console.log(checkRepeat(span.textContent));
    if (span.textContent === '') {
        alert("Зачем добавлять пустую задачу?")
    } else if (!checkRepeat(span.textContent)) {
        task.taskText = span.textContent;
        task.id = point++;
        todos.push(task);
        tabTask.insertAdjacentElement("beforeend", divTaskLine);
    } else {
        alert("повторяющаяся задача");
    }
    textInput.value = "";
    buttonDelete.addEventListener("click", () => deleteTask(buttonDelete.parentNode, task.id));
    buttonFinished.addEventListener("click", () => finishedTask(buttonFinished.parentNode, task));

    console.log(todos);
}

const checkRepeat = (text) => {
    return todos.find(item => item.taskText === text);
}

const deleteTask = (event, id) => {
    event.parentNode.parentNode.removeChild(event.parentNode);
    todos = todos.filter(item => item.id !== id);
}

const finishedTask = (event, task) => {
    if(task.isFinished === false){
        tabTaskFinished.insertAdjacentElement("beforeend", event.parentNode);
        todos.forEach(item => {
            if(item.id === task.id){
                item.isFinished = true;
            }
        })
    }else {
        tabTask.insertAdjacentElement("beforeend", event.parentNode);
        todos.forEach(item => {
            if(item.id === task.id){
                item.isFinished = false;
            }
        })
    }
}

buttonSave.addEventListener("click", () => saveTask(tabTask));