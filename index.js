// JavaScript code for dark mode toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleIcon = document.getElementById('toggleIcon');

    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleIcon.innerHTML = isDarkMode ? '<i class="fas fa-moon" style="color: wheat;"></i>' : '<i class="fas fa-sun" style="color: black;"></i>';
        localStorage.setItem('dark-mode', isDarkMode ? 'true' : 'false');
    });

    const isDarkModePreferred = localStorage.getItem('dark-mode') === 'true';

    if (isDarkModePreferred) {
        document.body.classList.add('dark-mode');
        toggleIcon.innerHTML = '<i class="fas fa-moon" style="color: wheat;"></i>';
    }
});
// JavaScript code for menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', function () {
        sidebar.classList.toggle('show-sidebar');
        // Change toggle icon color to wheat when showing sidebar
        if (sidebar.classList.contains('show-sidebar')) {
            menuBtn.querySelector('i').style.color = 'wheat';
        } else {
            menuBtn.querySelector('i').style.color = ''; // Reset color to default
        }
    });
});
