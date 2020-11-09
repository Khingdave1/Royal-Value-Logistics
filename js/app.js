/*===== MENU TOGGLE =====*/
const navList = document.querySelector('.nav-list');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

// Open Menu
openMenu.addEventListener('click', () => {
    // navList.classList.toggle('open-menu');
    // toggleMenu.classList.toggle('open-menu');
    navList.style.top = "0";
});

// Close Menu
closeMenu.addEventListener('click', () => {
    // navList.classList.toggle('open-menu');
    // toggleMenu.classList.toggle('open-menu');
    navList.style.top = "-100%";
});

