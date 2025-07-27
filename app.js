document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Appointment form submit
    const form = document.getElementById('appointment-form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your appointment request has been received.');
            form.reset();
        });
    }
});