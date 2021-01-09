const navResetOnResize = (nav, navClass, burger, burgerClass, navLinkFade) => {
    nav.classList.remove(navClass);
    navLinkFade();
    burger.classList.remove(burgerClass);
}

const navLinksFade = () => {
    const navLinks = document.querySelectorAll('.nav-links li');
    
    navLinks.forEach((link, index) => {
        // if (link.style.animation) {
        //     link.style.animation = '';
        //     TODO: decide if we want other animation for nav links from regular navbar
        // }
        // else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
    });
}


const navToggle = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinksFade();
        // Burger animation
        burger.classList.toggle('toggle');
    });
    mediaQuery.addEventListener("change", () => {
        if (mediaQuery.matches){
            navResetOnResize(nav, 'nav-active', burger, 'toggle', navLinksFade);
        }
    });
    if (mediaQuery.matches){
        navResetOnResize(nav, 'nav-active', burger, 'toggle', navLinksFade);
    }
}

const app = () => {
    navToggle();
}

app();