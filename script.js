document.addEventListener("DOMContentLoaded", function () {
    let num = 3;
    const taskList = document.getElementById("taskList");
    const newTaskInput = document.getElementById("newTask");
    const addTaskBtn = document.getElementById("addTaskBtn");

    function toggleTaskCompletion(taskDiv) {
        taskDiv.classList.toggle("completed");
    }

    function taskDeletion(taskDiv) {
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            taskDiv.remove();
            if(num > 1){
                num--;
            }
        });

        taskDiv.appendChild(deleteButton);
    }

    const defaultTasks = document.querySelectorAll(".task");

    defaultTasks.forEach(function (taskDiv) {
        taskDeletion(taskDiv);
        taskDiv.addEventListener("click", function () {
            toggleTaskCompletion(taskDiv);
        });
    });

    addTaskBtn.addEventListener("click", function () {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            if(num > 1){
                num = num + 1;
            }
            const taskDiv = document.createElement("div");
            taskDiv.className = "task";
            taskDiv.innerHTML = `
                <div class="task-content">
                    <span class="task-title">Task ${num}:</span>
                    <span>${taskText}</span>
                </div>
            `;

            taskDiv.addEventListener("click", function () {
                toggleTaskCompletion(taskDiv);
            });

            taskDeletion(taskDiv);
            console.log(taskList);
            taskList.appendChild(taskDiv);
            newTaskInput.value = "";
        }
    });
});
