/* show/hide mobile nav menu */
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');

function navDisplayToggle() {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
}

hamburger.addEventListener('click', navDisplayToggle);

/* show/hide music nav dropdown */
const dropBtn = document.querySelector('.dropbtn');
const dropItems = document.querySelector('.dropdown');

function menuDropdown() {
    if (dropItems.style.display === 'block') {
        dropItems.style.display = 'none';
    } else {
        dropItems.style.display = 'block';
    }
}

dropBtn.addEventListener('click', menuDropdown);
