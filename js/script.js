function animateAndNavigate(event) {
    event.preventDefault();

    const button = event.target;
    button.classList.add('clicked');

    // Listen for the end of the animation to remove the class
    button.addEventListener('transitionend', () => {
        button.classList.remove('clicked');
    }, { once: true });

    // Navigate after animation completes
    setTimeout(() => {
        window.open(button.getAttribute('data-url'), '_blank');
    }, 300);  // Match this to your animation duration
}
