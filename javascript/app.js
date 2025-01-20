// Hämta element
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-mobile');

// Lägger till en klickhändelse
hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Visa/dölj menyn
});
