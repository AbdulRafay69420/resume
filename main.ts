const toggleButton = document.getElementById('themeToggleButton');
const bodyElement = document.body;

function toggleTheme() {
    bodyElement.classList.toggle('dark-theme');
}

if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
}