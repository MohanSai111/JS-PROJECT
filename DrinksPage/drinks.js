// DATABASE: Fill in your own file paths here
const drinks = {
    'lemon': {
        tea:"Lemon Tea",
        hero: "https://andtea.com/wp-content/uploads/2021/11/%E7%8E%89%E7%BF%A1%E7%BF%A0%E9%87%91%E8%90%B1-%E6%8B%B7%E8%B2%9D-2.png", 
        bg: "https://andtea.com/wp-content/uploads/2021/11/%E9%87%91%E8%89%B2%E5%85%89%E8%8A%92%EF%BC%8B%E7%B2%89%E7%B4%85%E6%9F%9A%E9%A6%991-%E6%8B%B7%E8%B2%9D.jpg",
        desc: "The perfect ratio of milk foam to tea soup is like the romance and gentleness of fresh snow falling."
    },
    'choco': {
        tea:"Choco tea",
        hero: "https://andtea.com/wp-content/uploads/2021/11/%E9%87%91%E7%B5%B2%E9%9C%A7%E6%B7%9E%E4%BC%AF%E7%88%B5%E7%B4%85-%E6%8B%B7%E8%B2%9D-2.png", 
        bg: "https://andtea.com/wp-content/uploads/2021/11/%E5%A5%B6%E8%93%8B%E7%B3%BB%E5%88%97%EF%BC%A1%EF%BC%AC%EF%BC%AC-%E6%8B%B7%E8%B2%9D.jpg", 
        desc: "Combining Taiwanese tea with French desserts: Inspired by French crème brûlée."
    },
    'plain': {
        tea:"plain Tea",
        hero: "https://andtea.com/wp-content/uploads/2021/11/%E9%9D%92%E9%9F%BB%E5%9B%9B%E5%AD%A3-%E6%8B%B7%E8%B2%9D-2.png", 
        bg: "https://andtea.com/wp-content/uploads/2021/11/20210803Tea%E6%84%9B%E8%B0%B7%E5%9C%8B%E9%9A%9B%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B80577-%E6%8B%B7%E8%B2%9D.jpg", 
        desc: "Rich milk blended perfectly with our signature black tea base for a smooth finish."
    }
};

function changeVariant(type) {
    const data = drinks[type];
    if(!data) return;

    // 1. Select Elements
    const hero = document.getElementById('hero-cup');
    const bg = document.getElementById('bg-img');
    const desc = document.getElementById('drink-desc');
    const thumbs = document.querySelectorAll('.thumb');
    const title= document.getElementById("drink-title");

    // 2. Animate Out (Fade & Float Up)
    hero.style.opacity = 0;
    hero.style.transform = "translate(-50%, -45%)"; 
    bg.style.opacity = 0;

    setTimeout(() => {
        // 3. Swap Data
        hero.src = data.hero;
        bg.src = data.bg;
        desc.innerText = data.desc;
        title.innerText= data.tea;

        // 4. Animate In (Fade & Drop Down)
        hero.style.opacity = 1;
        hero.style.transform = "translate(-50%, -50%)"; 
        bg.style.opacity = 1;
    }, 300);

    // 5. Update Active Thumbnail Style
    thumbs.forEach(img => img.classList.remove('active'));
    event.target.classList.add('active');
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