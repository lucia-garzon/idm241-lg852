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
    }, 300);  // Matched to animation duration
}


// having the clicked icon lead to a section or external link

document.querySelectorAll('.logo-wrapper').forEach((wrapper) => {
    wrapper.addEventListener('click', handleIconClick);
});

// function handleIconClick(event) {
//     const target = event.currentTarget; 
//     const linkType = target.getAttribute('data-type'); 
//     const link = target.getAttribute('data-link'); 
//     console.log("Navigating to: ", link);

//     target.classList.add('clicked-logo');
//     setTimeout(() => target.classList.remove('clicked-logo'), 300);

//     if (linkType === 'section') {
        
//         setTimeout(() => {
//             window.location.href = link; 
//         }, 300);
//     } else if (linkType === 'external') {
//         setTimeout(() => {
//             window.open(link, '_blank');
//         }, 300);
//     }
// }

// function handleIconClick(event) {
//     const target = event.currentTarget;
//     const link = target.getAttribute('data-link');
//     const type = target.getAttribute('data-type');

//     target.classList.add('clicked-logo');

//     setTimeout(() => {
        
//         target.classList.remove('clicked-logo');

//         // Navigate based on type
//         if (type === 'section') {
//             window.location.href = link;
//         } else if (type === 'external') {
//             window.open(link, '_blank');
//         }
//     }, 300);
// }

// function handleIconClick(event) {
//     const target = event.currentTarget;
//     const link = target.getAttribute('data-link');
//     const type = target.getAttribute('data-type');
//     const logoImage = target.querySelector('.tool-logo'); 
//     if (logoImage) {
//         logoImage.classList.add('clicked-logo');
//     }

//     setTimeout(() => {
        
//         if (logoImage) {
//             logoImage.classList.remove('clicked-logo');
//         }

//         if (type === 'section') {
//             window.location.href = link;
//         } else if (type === 'external') {
//             window.open(link, '_blank');
//         }
//     }, 300); 
// }

// const logos = document.querySelectorAll('.logo-wrapper');
// logos.forEach(logo => {
//     logo.addEventListener('click', handleIconClick);
// });

// function handleIconClick(event) {
//     const target = event.currentTarget;
//     const link = target.getAttribute('data-link');
//     const type = target.getAttribute('data-type');
//     const logoImage = target.querySelector('.tool-logo');

//     if (logoImage) {
//         logoImage.classList.add('clicked-logo');
//     }

//     setTimeout(() => {
//         if (type === 'section' || type === 'external') {
//             window.open(link, '_blank');
//         }

//         if (logoImage) {
//             logoImage.classList.remove('clicked-logo');
//         }
//     }, 300); 
// }

// document.querySelectorAll('.logo-wrapper').forEach((logo) => {
//     logo.addEventListener('click', handleIconClick);
// });

function handleIconClick(event) {
    const target = event.currentTarget;
    const link = target.getAttribute('data-link');
    const type = target.getAttribute('data-type');
    const logoImage = target.querySelector('.tool-logo');

    if (logoImage) {
        logoImage.classList.add('clicked-logo');
    }

    setTimeout(() => {
        if (type === 'section' || type === 'external') {
            window.open(link, '_blank');
        }

        if (logoImage) {
            logoImage.classList.remove('clicked-logo');
        }
    }, 600);
}




