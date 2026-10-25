/* show/hide mobile nav menu */
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

function navDisplayToggle() {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}

hamburger.addEventListener('click', navDisplayToggle);
