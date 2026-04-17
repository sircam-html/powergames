function applyDarkMode() {
    const now = new Date();
    const hours = now.getHours();
    const userPreference = localStorage.getItem('darkMode');
    
    if (userPreference !== null) {
        // Apply user preference
        if (userPreference === 'enabled') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    } else {
        // Apply automatic dark mode based on time
        if (hours >= 20 || hours < 8) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
}

function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }
}

// Apply dark mode immediately on page load
applyDarkMode();

// Check the time every minute to apply or remove dark mode
setInterval(applyDarkMode, 60000);