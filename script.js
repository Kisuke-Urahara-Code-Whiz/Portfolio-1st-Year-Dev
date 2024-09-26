// Function to add glow effect to a section when clicked from navbar
function addGlowEffect(section) {
    // Add the glow class
    section.classList.add('glow');

    // Remove the glow class after 3 seconds
    setTimeout(function() {
        section.classList.remove('glow');
    }, 500); // 1 seconds
}

// Get all navbar links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through each navbar link and add a click event
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default anchor behavior
        e.preventDefault();

        // Get the target section id from the href attribute
        const targetSectionId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);

        // Scroll to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Add the glow effect to the target section
        addGlowEffect(targetSection);
    });
});
