const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on Enter key
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const task = taskInput.value.trim();

    // Input validation
    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Create new list item
    const li = document.createElement("li");
    li.textContent = task;

    // Add click event to remove task
    li.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    // Add task to DOM
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}
