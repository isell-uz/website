window.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin()
    
    // Animate phones
    gsap.from('.phone-animate', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });
  
    // Animate stats
    gsap.from('.stat-number', {
      textContent: 0,
      duration: 2,
      ease: "power1.out",
      snap: { textContent: 1 },
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".stat-number",
        start: "top bottom"
      }
    });
  });

function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

function toggleAdvanced() {
    const advancedOptions = document.getElementById('advanced-options');
    const advancedButton = document.getElementById('advanced-button');
    advancedOptions.classList.toggle('hidden');
    advancedButton.classList.toggle('rotate-180');
}

// Add hover effects to product cards
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.querySelector('.product-overlay').classList.remove('opacity-0');
            this.querySelector('.product-overlay').classList.add('opacity-100');
        });
        card.addEventListener('mouseleave', function () {
            this.querySelector('.product-overlay').classList.add('opacity-0');
            this.querySelector('.product-overlay').classList.remove('opacity-100');
        });
    });
});
