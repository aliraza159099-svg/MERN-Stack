let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let taskList = document.querySelector(".taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let isDone = JSON.parse(localStorage.getItem("isDone")) || {};

addBtn.addEventListener("click", () => {
    let taskText = input.value.trim(); 

    if (taskText === "") {
        alert("Empty task can't be added");
    } else {
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";
        alert("Task saved successfully!");
        displayTask();
    }
});

let displayTask = () => {
    taskList.innerHTML = "";
    
    tasks.forEach((task) => {
        let li = document.createElement("li");
        li.classList.add("todo-item"); 

        // 3. LOGIC FIX: Wrap task text in a separate span tag
        // This ensures the line-through style cuts only the text, leaving your buttons clean
        let taskSpan = document.createElement("span");
        taskSpan.textContent = task;
        li.appendChild(taskSpan);

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");
        li.append(deleteBtn);

        let doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.classList.add("doneBtn");
        li.append(doneBtn);

        if (isDone[task] === true) {
            taskSpan.style.textDecoration = "line-through";
            li.classList.add("done");
        }

        // Delete button logic
        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter((t) => t !== task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            
            // Clean up the tracking state database for the deleted item
            delete isDone[task];
            localStorage.setItem("isDone", JSON.stringify(isDone));
            
            displayTask();
        });
        doneBtn.addEventListener("click", () => {
            isDone[task] = true; // Use the unique task string text as the object key
            localStorage.setItem("isDone", JSON.stringify(isDone)); // Commit to localStorage
            
            taskSpan.style.textDecoration = "line-through"; // Strike through text immediately
            li.classList.add("done");
        });
        
        taskList.append(li);
    });
}

// Render the application list on initial load
displayTask();
