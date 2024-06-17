/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show the menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide the menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});


/*=============== ADD BLUR HEADER ===============*/

const blurHeader = () => {
    const header = document.getElementById('header');
    // Add a class if the bottom offset is greater than 50 of the viewport
    window.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}

window.addEventListener('scroll', blurHeader)


/*=============== SWIPER FAVORITES ===============*/
let swiperFavorite = new Swiper('.favorite__swiper', {
    loop: true,
    slidesPerView:'auto',
    centeredSlides:'auto',
    grabCursor:true,

    breakpoints:{
        768:{
            slidesPerView:3,
        }
    }
});

