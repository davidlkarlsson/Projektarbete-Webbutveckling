

// Hämtar element för textarea i Contact
const textarea = document.getElementById('responsive-textarea');

if (textarea) {
window.addEventListener('resize', () => {
    
    if (window.innerWidth < 760) {
        textarea.rows = 8;
        textarea.cols = 30;
    } else {
        textarea.rows = 10;
        textarea.cols = 40;
    }
});

}

// Hämta element
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-mobile');

// Lägger till en klickhändelse
hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Visa/dölj menyn
});



// Hämta element för filterknappen
const filterButton = document.getElementById('filter-button');
const filterContainer = document.getElementById('filter-container')

// Lägger till en klickhändelse

filterButton.addEventListener('click', () => {
    filterContainer.classList.toggle('active'); // Visar/döljer filterkeywords
    filterButton.classList.toggle('active');
});


function filterArticles() {
    const filterValue = document.getElementById("keyword-filter").value.toLowerCase();
    const articles = document.querySelectorAll(".article");

    articles.forEach(article => {
        const title = article.getAttribute("data-keywords").toLowerCase();
        if (filterValue === "" || filterValue === title) {
            article.style.display = "flex";
        } else {
            article.style.display = "none";
        }
    });
}





