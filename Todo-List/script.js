const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteButton">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";

    const deleteButton = taskItem.querySelector(".deleteButton");
    deleteButton.addEventListener("click", deleteTask);
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}