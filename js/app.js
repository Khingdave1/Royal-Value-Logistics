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
    navList.style.top = "-1000%";
});


/*===== UPDATE THE ELEMENT TO CURRENT YEAR =====*/
// Update the element to the current year //
document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()));

/*===== SERVICE DROPDOWN =====*/
const serviceLink = document.querySelector('.service a');
const serviceList = document.querySelector('.service div');
const serviceIcon = document.querySelector('.service .chevron-up');

serviceLink.addEventListener('click', () => {
    serviceList.classList.toggle('drop');
    serviceIcon.classList.toggle('rotate');
});

