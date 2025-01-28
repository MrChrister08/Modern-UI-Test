document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active'); // Toggle the active class for the menu
        hamburger.classList.toggle('active'); // Toggle the active class for the hamburger
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove('active'); // Remove the active class
            hamburger.classList.remove('active'); // Remove the active class for hamburger
        }
    });
});