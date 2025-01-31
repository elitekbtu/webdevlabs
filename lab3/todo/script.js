const taskInput = document.getElementById('taskInput');
const taskList = document.querySelector('ul');
const addTaskButton = document.getElementById('addTaskButton');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = "";

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                taskSpan.style.textDecoration = "line-through";
            } else {
                taskSpan.style.textDecoration = "none";
            }
        });

        deleteButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });
    }
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});