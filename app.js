const navResetOnResize = (nav, navClass, burger, burgerClass, navLinkFade) => {
    onResize = true;
    nav.classList.remove(navClass);
    navLinkFade(onResize);
    burger.classList.remove(burgerClass);
}

const navLinksFade = () => {
    if (!onResize){
        const navLinks = document.querySelectorAll('.nav-links li');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });
    }
}


const navToggle = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const body = document.querySelector('body');
    onResize = false;

    burger.addEventListener('click', () => {
        body.classList.toggle('hide');
        nav.classList.toggle('nav-active');
        navLinksFade(onResize);
        // Burger animation
        burger.classList.toggle('toggle');
    });
    mediaQuery.addEventListener("change", () => {
        if (mediaQuery.matches){
            body.classList.remove('hide');
            navResetOnResize(nav, 'nav-active', burger, 'toggle', navLinksFade);
        }
    });
    // if (mediaQuery.matches){
    //     navResetOnResize(nav, 'nav-active', burger, 'toggle', navLinksFade);
    // }
}

const app = () => {
    navToggle();
}

app();