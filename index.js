// parllex effect
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Select the elements
    const section = document.querySelector('.parallax-section');
    const bgImage = document.querySelector('.parallax-bg');
    const movingText = document.querySelector('.parallax-text');

    // 2. Add the Scroll Event
    window.addEventListener('scroll', function() {
        // Safety check: if section doesn't exist, stop
        if (!section) return;

        // --- THE FIX IS HERE ---
        // Calculate the distance from the top of the viewport to the section
        const sectionTop = section.offsetTop;
        const scrollY = window.scrollY;
        
        // This number represents "How far have I scrolled INTO this section?"
        // When you reach the section, this number will be close to 0.
        const value = scrollY - sectionTop;
        console.log(value);
        

        // Move Image (Slower speed)
        // We use 'value' instead of 'scrollY' so it starts at the right place
        if(bgImage) {
            bgImage.style.transform = `translateY(${value * 0.4}px)`;
        }

        // Move Text (Horizontal)
        if(movingText) {
            movingText.style.transform = `translateX(${value * -0.8}px)`;
        }
    });

});
// Hover reveal
document.addEventListener("DOMContentLoaded", function() {
    // Select all news items
    const items = document.querySelectorAll('.news-item');

    items.forEach(el => {
        const image = el.querySelector('.hover-img');

        el.addEventListener('mouseenter', (e) => {
            // Show image when mouse enters
            image.style.opacity = "1";
            image.style.transform = "translate(-50%, -50%) scale(1)";
        });

        el.addEventListener('mouseleave', (e) => {
            // Hide image when mouse leaves
            image.style.opacity = "0";
            image.style.transform = "translate(-50%, -50%) scale(0.8)";
        });

        el.addEventListener('mousemove', (e) => {
            // Get the rectangle of the row
            // We need this to calculate position relative to the row, not the page
            const rect = el.getBoundingClientRect();
            
            // Calculate mouse position inside the row
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Move the image
            image.style.left = `${x}px`;
            image.style.top = `${y}px`;
        });
    });

});
// footer
// ... inside your DOMContentLoaded function ...
// Select the button
const topBtn = document.getElementById('scrollToTop');
if(topBtn) {
    topBtn.addEventListener('click', function() {
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
// Toggle the Menu (Open/Close)
function toggleMenu() {
    // 1. Get the Menu and the Icon
    const menu = document.getElementById('fullscreen-menu');
    const icon = document.querySelector('.menu-icon');

    // 2. Toggle the Menu (Slide In/Out)
    menu.classList.toggle('active');

    // 3. Toggle the Icon (Hide/Show)
    icon.classList.toggle('hide-burger');
}

// shrinking and moving tea icon
const centerIcon= document.querySelector(".center-icon");
const cupImage= document.getElementById("img2");

window.addEventListener('scroll',function(){
    let ScrollY= window.scrollY;
    let newScale=Math.max(0.6,1-(ScrollY *0.0015));

    if (centerIcon) {
        centerIcon.style.transform=`translate(-50%,-50%) scale(${newScale})`
    }

    if (cupImage) {
        cupImage.style.transform=`tranlateY(${scrollY * -0.2}px)`
        }
})
