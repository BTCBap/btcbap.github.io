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
            playButton.innerHTML = '<i class="fas fa-play"></i>'; // Change back to play button icon
        }
    });
});

// JavaScript code for chapter functions
document.addEventListener("DOMContentLoaded", function() {
    const nextChapterBtn = document.getElementById("nextChapterBtn");
    const backToChapterBtn = document.getElementById("backToChapterBtn");
    const backArrowContainer = document.getElementById("backArrowContainer");

    // Add click event listener to the forward arrow button
    nextChapterBtn.addEventListener("click", function(event) {
        // Prevent default behavior of anchor link
        event.preventDefault();

        const currentChapter = getCurrentChapter();
        const nextChapter = getNextChapter(currentChapter);

        if (nextChapter) {
            toggleChapter(currentChapter, nextChapter);
            updateArrowVisibility(nextChapter);
        }
    });

    // Add click event listener to the back arrow button
    backToChapterBtn.addEventListener("click", function(event) {
        // Prevent default behavior of anchor link
        event.preventDefault();

        const currentChapter = getCurrentChapter();
        const previousChapter = getPreviousChapter(currentChapter);

        if (previousChapter) {
            toggleChapter(currentChapter, previousChapter);
            updateArrowVisibility(previousChapter);
        }
    });

    // Function to get the currently visible chapter
    function getCurrentChapter() {
        return document.querySelector(".chapter-container:not(.hidden)");
    }

    // Function to get the next chapter based on the current chapter
    function getNextChapter(currentChapter) {
        return currentChapter.nextElementSibling;
    }

    // Function to get the previous chapter based on the current chapter
    function getPreviousChapter(currentChapter) {
        return currentChapter.previousElementSibling;
    }

    // Function to toggle visibility between two chapters
    function toggleChapter(currentChapter, nextChapter) {
        currentChapter.classList.add("hidden");
        nextChapter.classList.remove("hidden");
    }

    // Function to update arrow visibility based on the current chapter
    function updateArrowVisibility(currentChapter) {
        const nextChapter = getNextChapter(currentChapter);
        const previousChapter = getPreviousChapter(currentChapter);

        if (nextChapter) {
            nextChapterBtn.classList.remove("hidden");
        } else {
            nextChapterBtn.classList.add("hidden");
        }

        if (previousChapter) {
            backArrowContainer.classList.remove("hidden");
        } else {
            backArrowContainer.classList.add("hidden");
        }
    }
});