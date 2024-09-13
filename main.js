var toggleButton = document.getElementById('themeToggleButton');
var bodyElement = document.body;
function toggleTheme() {
    bodyElement.classList.toggle('dark-theme');
}
if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
}
