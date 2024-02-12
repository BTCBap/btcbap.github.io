// JavaScript code for dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleIcon = document.getElementById('toggleIcon');

    toggleBtn.addEventListener('click', function() {
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
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('show-sidebar');

        // Toggle the appropriate class for the sidebar based on dark mode
        if (sidebar.classList.contains('show-sidebar')) {
            sidebar.classList.add(document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
            menuBtn.style.color = document.body.classList.contains('dark-mode') ? 'wheat' : 'var(--hover-color-light)';
        } else {
            sidebar.classList.remove('dark-mode', 'light-mode');
            menuBtn.style.color = ''; // Reset color to default
        }
    });
});

// JavaScript code for back button
document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('backBtn');

    backBtn.addEventListener('click', function() {
        window.history.back(); // Go back to the previous page
    });
});

// JavaScript code for audio player
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const audioPlayer = document.getElementById('audioPlayer');

    playButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.innerHTML = '<i class="fas fa-stop"></i>'; // Change to stop button icon
        } else {
            audioPlayer.pause();
            audioPlayer.currentTime = 0; // Reset audio to the beginning
            playButton.innerHTML = '<i class="fas fa-play"></i>'; // Change back to play button icon
        }
    });
});