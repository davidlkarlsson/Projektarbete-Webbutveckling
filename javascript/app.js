const textarea = document.getElementById('responsive-textarea');

window.addEventListener('resize', () => {
    
    if (window.innerWidth < 760) {
        textarea.rows = 20;
        textarea.cols = 30;
    } else {
        textarea.rows = 30;
        textarea.cols = 40;
    }
});

// Hämta element
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-mobile');

// Lägger till en klickhändelse
hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Visa/dölj menyn
});



