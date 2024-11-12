// Select the title element
const title = document.querySelector('.card-title-final');

// Event listener for mouse movement over the title
title.addEventListener('mousemove', (e) => {
    // Get the position of the mouse relative to the element
    const rect = title.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse position within the element
    const width = title.offsetWidth; // Width of the title element

    // Calculate background position as a percentage based on mouse position
    const percentage = (x / width) * 100;

    // Set background position for dynamic gradient movement
    title.style.backgroundPosition = `${percentage}% center`;
});

// Reset the gradient position when the mouse leaves the title
title.addEventListener('mouseleave', () => {
    title.style.backgroundPosition = '0% center'; // Reset to the starting position
});
