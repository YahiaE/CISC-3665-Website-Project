document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("taskList");
    const newTaskInput = document.getElementById("newTask");
    const addTaskBtn = document.getElementById("addTaskBtn");

    function playCheckedOffSound() {
        const audio = document.getElementById("checkmarkAudio");
        audio.play();
    }

    function toggleTaskCompletion(taskDiv) {
        const checkbox = taskDiv.querySelector(".task-checkbox");
        if (checkbox.checked) {
            taskDiv.classList.add("completed");
            playCheckedOffSound();
        } else {
            taskDiv.classList.remove("completed");
        }
    }

    function taskDeletion(taskDiv) {
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            taskDiv.parentNode.remove();
        });

        taskDiv.appendChild(deleteButton);
    }

    const defaultTasks = document.querySelectorAll(".task");

    defaultTasks.forEach(function (taskDiv) {
        taskDeletion(taskDiv.querySelector(".task-controls"));
        taskDiv.addEventListener("click", function () {
            toggleTaskCompletion(taskDiv);
        });
    });

    addTaskBtn.addEventListener("click", function () {
        const taskText = newTaskInput.value.trim();
        console.log(taskText);
        if (taskText !== "") {
            const taskDiv = document.createElement("div");
            taskDiv.className = "task";
            taskDiv.innerHTML = `

                <div class="task-text">
                    <input type="checkbox" class="task-checkbox">
                    <span>${taskText}</span>
                </div>
                <div class="task-controls">
                    <input type="date" class="due-date" placeholder="Due Date">
                    <input type="color" class="color-code" value="#ffffff">
                </div>

            `;

            taskDiv.addEventListener("click", function () {
                toggleTaskCompletion(taskDiv);
            });

            taskDeletion(taskDiv.querySelector(".task-controls"));
                    
            taskList.appendChild(taskDiv);
            newTaskInput.value = "";
        }
    });
});
