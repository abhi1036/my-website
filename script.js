const toggleButton = document.getElementById('toggle-projects');
const projectList = document.getElementById('project-list');

toggleButton.addEventListener('click', () => {
    if (projectList.style.display === 'none' || projectList.style.display === '') {
        projectList.style.display = 'block';
        projectList.style.opacity = '0';
        setTimeout(() => {
            projectList.style.opacity = '1';
        }, 50);
        toggleButton.textContent = 'Hide Projects';
    } else {
        projectList.style.opacity = '0';
        setTimeout(() => {
            projectList.style.display = 'none';
        }, 300);
        toggleButton.textContent = 'Show Projects';
    }
});
