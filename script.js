const toggleButton = document.getElementById('toggle-projects');
const projectList = document.getElementById('project-list')

toggleButton.addEventListener('click',() =>{
    if (projectList.style.display === 'none') {
        projectList.style.display = 'block';
        toggleButton.textContent = 'Hide Projects';
    } else {
        projectList.style.display = 'none';
        toggleButton.textContent = 'Show Projects';
    }
});