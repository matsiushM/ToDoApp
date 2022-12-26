
const buttonSave = document.getElementById("saveButton");
const finishedButton = document.getElementById("finished");
const deleteButton = document.querySelector("#delete");
const tabTask = document.querySelector("#tabTask");
let point = 1;

buttonSave.addEventListener("click", saveTask);
finishedButton.addEventListener("click", finishedTask);
tabTask.addEventListener("click", deleteTask);

function saveTask() {
    const task = document.getElementById("task").value;

    const taskHTMl = `<div class="container-tab__task">
            <div class="container-tab__task__number">${++point}</div>
            <div class="container-tab__task__txt">${task}</div>

            <div class="container-tab__task__buttons">
                <button type="button" class="container-tab__task__button__delete" id="delete">DELETE</button>
                <button type="button" class="container-tab__task__button__finished" id="finished">FINISHED</button>
            </div>
        </div>`;
    tabTask.insertAdjacentHTML("beforeend", taskHTMl);

}


function deleteTask(event) {
    console.log(event.target);
    if(event.target.id === "delete"){

        const node =  event.target.closest(".container-tab__task");
        console.log(node);
        node.remove();
        --point;
    }
}
function finishedTask(event) {
    if(event.target.id === "finished"){
        console.log("Done");
    }
}