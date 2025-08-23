// ==================== WELCOME ALERT ====================
function greetUser() {
    alert("👋 Welcome to Abhi's Portfolio!");
}
greetUser();

// ==================== DIGITAL CLOCK ====================
function updateClock() {
    const now = new Date();
    const clock = document.getElementById("clock");
    clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});

// ==================== PROJECT LIST TOGGLE ====================
const toggleButton = document.getElementById("toggle-projects");
const projectList = document.getElementById("project-list");

toggleButton.addEventListener("click", () => {
    const isVisible = projectList.classList.toggle("show");

    if (isVisible) {
        toggleButton.textContent = "Hide Projects";
    } else {
        toggleButton.textContent = "Show Projects";
    }
});


const todoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");

// Array to store tasks
let tasks = [];

addTaskBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if(taskText !== ""){
        tasks.push(taskText);
        renderTasks();
        todoInput.value = "";
    }
});

function renderTasks(){
    todoList.innerHTML = ""; // Clear list
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task;

        // Add delete button
        const delBtn = document.createElement("button");
        delBtn.innerText = "❌";
        delBtn.style.marginLeft = "10px";
        delBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(delBtn);
        todoList.appendChild(li);
    });
}
