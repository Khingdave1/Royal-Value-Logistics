/*===== DROPDOWN =====*/
const dropDown = document.querySelector('.dropdown');
const dropBtn = document.querySelector('.dropbtn');
const dropDownContentLink = document.querySelectorAll('.dropdown-content a');

function getValue() {
    dropBtn.innerText = this.innerText;
}

const no = dropDownContentLink.forEach(n => n.addEventListener('click', getValue));