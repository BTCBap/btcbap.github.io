const toggleBtn = document.getElementById('toggleBtn');
const toggleIcon = document.getElementById('toggleIcon');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        toggleIcon.innerHTML = '<i class="fas fa-sun"></i>';
    }
});
