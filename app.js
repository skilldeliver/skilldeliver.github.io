const navLinksFade = () => {
    const navLinks = document.querySelectorAll('.nav-links li');
    
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            console.log(index);
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
        }
    });
}


const navToggle = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        body.classList.toggle('hide');
        navLinksFade();
        // Burger animation
        burger.classList.toggle('toggle');
    });
}

const app = () => {
    navToggle();
}

app();