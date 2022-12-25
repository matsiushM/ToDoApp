
let buttonSave = document.getElementById("saveButton");
const finishedButton = document.getElementById("finished");
const tabTask = document.getElementById("tabTask");
let point = 1;

buttonSave.addEventListener("click", saveTask);
finishedButton.addEventListener("click", finishedTask)

function saveTask() {

    let task = document.getElementById("task").value;

    const taskHTMl = `<div class="container-tab__task">
            <div class="container-tab__task__number">${++point}</div>
            <div class="container-tab__task__txt">${task}</div>
            <button class="container-tab__task__button" id = "finished">FINISHED</button>
        </div>`;
    tabTask.insertAdjacentHTML("beforeend", taskHTMl);
}

function finishedTask(event) {

    console.log(event.target);

    if(event.target.id === "finished"){
      const node =  event.target.closest(".container-tab__task");
      console.log(node);
      node.remove();
      --point;
    }
}