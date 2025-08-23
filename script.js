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
