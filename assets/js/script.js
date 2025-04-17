// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuButton.setAttribute('aria-expanded', !expanded);
        });
    }

    // Add active class to current page in mobile menu
    const currentPath = window.location.pathname;
    if (currentPath.includes('index.html') || currentPath === '/' || currentPath.endsWith('/')) {
        document.getElementById('mobile-index-page')?.classList.add('active-mobile-link');
    } else if (currentPath.includes('calculator.html')) {
        document.getElementById('mobile-calculate-page')?.classList.add('active-mobile-link');
    } else if (currentPath.includes('serial.html')) {
        document.getElementById('mobile-serial-page')?.classList.add('active-mobile-link');
    }
});