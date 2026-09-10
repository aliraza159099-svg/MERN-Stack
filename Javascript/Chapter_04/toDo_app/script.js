
let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let taskList = document.querySelector(".taskList");
// 2. Load existing tasks from localStorage or start with an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

addBtn.addEventListener("click", () => {
    // 3. Trim whitespace to prevent adding spaces as tasks
    let taskText = input.value.trim(); 

    if (taskText === "") {
        alert("Empty task can't be added");
    } else {
        // 4. Push the new task into our array
        tasks.push(taskText);

        // 5. Save the updated array back to localStorage
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // 6. Clear the input field for the next task
        input.value = "";

        alert("Task saved successfully!");
        displayTask()
    }
});

let displayTask = ()=>{
    taskList.innerHTML = "";
    tasks.forEach((task) => {
        
        let li = document.createElement("li");
        li.textContent = task;
        li.classList.add("todo-item"); 
        taskList.append(li);

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");
        li.append(deleteBtn);

        let doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.classList.add("doneBtn");
        li.append(doneBtn);

        deleteBtn.addEventListener("click", () => {
            // Remove the task from the array
            tasks = tasks.filter((t) => t !== task);
            // Update localStorage
            localStorage.setItem("tasks", JSON.stringify(tasks));
            // Refresh the displayed list
            displayTask();
        });

        doneBtn.addEventListener("click", () => {
            li.style.textDecoration = "line-through"; // Example of marking as done
            localStorage.setItem("tasks", JSON.stringify(tasks));
            // For example, you could add a class to indicate it's done
            li.classList.add("done");

        });
        
    });
}
displayTask()
