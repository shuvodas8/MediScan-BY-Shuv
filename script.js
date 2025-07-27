// মোবাইল মেনু টগল
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Smooth scroll (optional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                mobileMenu.classList.add('hidden'); // মোবাইলে ক্লিকের পর মেনু বন্ধ
            }
        });
    });

    // অ্যাপয়েন্টমেন্ট ফর্ম সাবমিট
    const form = document.getElementById('appointment-form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your appointment request has been received.');
            form.reset();
        });
    }
});
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTop.classList.remove('hidden');
    } else {
        backToTop.classList.add('hidden');
    }
});
backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});