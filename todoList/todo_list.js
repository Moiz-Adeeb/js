const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllTasksBtn = document.getElementById('clearAllTasksBtn');
let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((tasks, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${tasks.completed ? "checked" : ""}>
            <label for="task-${index}">${tasks.text}</label>`;
        li.querySelector('input').addEventListener('change', () => toggleTask(index));
        taskList.appendChild(li);
            
    })
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(tasks => !tasks.completed);
    displayTasks();
}

function clearall() {
    tasks = []
    displayTasks();
}



addTaskBtn.addEventListener('click', addTask);
clearCompletedBtn.addEventListener('click', clearCompletedTasks);
clearAllTasksBtn.addEventListener('click', clearall);

displayTasks();


