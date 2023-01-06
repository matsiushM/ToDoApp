
const buttonSave = document.getElementById("saveButton");
const deleteButton = document.querySelector("#delete");
const tabTask = document.querySelector("#tabTask");
const tabTaskFinished = document.querySelector("#tabTaskFinished");
const container = document.querySelectorAll(".container");
let point = 1;

buttonSave.addEventListener("click", saveTask);

container.forEach(item => {
    item.addEventListener("click", finishedTask);
    item.addEventListener("click", deleteTask);
})




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
    if(event.target.id === "delete"){
        const node =  event.target.closest(".container-tab__task");
        node.remove();
        --point;
    }
}
function finishedTask(event) {
    if(event.target.id === "finished"){
        const nodeFinished = event.target.closest(".container-tab__task");
        console.log(nodeFinished);
        tabTaskFinished.insertAdjacentElement("afterbegin",nodeFinished);
    }
}