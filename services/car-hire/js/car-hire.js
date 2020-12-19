/*===== LOAD MORE CARS =====*/
const viewMore = document.querySelector('.view-more');

let currentItems = 4;
viewMore.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.car-list .car-item')];
    for (let i = currentItems; i < currentItems + 4; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'block';
        }
    }
    currentItems += 4;

    // Load more button will be hidden after list fully loaded
    if (currentItems >= elementList.length) {
        e.target.style.display = 'none';
    }
});