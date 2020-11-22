/*===== DROPDOWN =====*/
const dropDown = document.querySelector('.dropdown');
const dropBtn = document.querySelector('.dropbtn');
const dropDownContentLink = document.querySelectorAll('.dropdown-content a');

function getValue() {
    dropBtn.innerText = this.innerText;
}

const no = dropDownContentLink.forEach(n => n.addEventListener('click', getValue));


/*===== SIDENAV MENU =====*/
const menuIcon = document.querySelector('.menu-icon');
const sideNav = document.querySelector('.sidenav');
const closeMenu = document.querySelector('.close-menu');
// OPEN MENU
menuIcon.addEventListener('click', () => {
    sideNav.classList.add('show-sidenav');
});

// CLOSE MENU
closeMenu.addEventListener('click', () => {
    sideNav.classList.remove('show-sidenav');
});