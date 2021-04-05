//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


const navResetOnResize = (nav, navClass, burger, burgerClass, navLinkFade) => {
    onResize = true;
    nav.classList.remove(navClass);
    navLinkFade(onResize);
    burger.classList.remove(burgerClass);
    onResize = false;
}

const navLinksFade = (onResize) => {
    if (!onResize){
        const navLinks = document.querySelectorAll('.nav-links li');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });
    }
    else {
        const navLinks = document.querySelectorAll('.nav-links li');

        navLinks.forEach((link, index) => {
            link.style.animation = ``;
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
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach((link, index) => {
        link.addEventListener("click", () => {
            if (!mediaQuery.matches){
                console.log("Clicked!")
                body.classList.toggle('hide');
                nav.classList.toggle('nav-active');
                navLinksFade(onResize);
                // Burger animation
                burger.classList.toggle('toggle');
            }
        });

    });
}

const contactToggle = () => {
    const contactLink = document.querySelector('#contact-link');
    const closeLink = document.querySelector('#close-link');
    const nav = document.querySelector('nav');

    const contactSection = document.querySelector('.contact');
    const body = document.querySelector('body');

    contactLink.addEventListener("click", () => {
        body.classList.toggle('hide');
        nav.classList.toggle('hidden');
        contactSection.classList.toggle('show-contact');
    });

    closeLink.addEventListener("click", () => {
        body.classList.toggle('hide');
        nav.classList.toggle('hidden');
        contactSection.classList.toggle('show-contact');
    });
}

const cardHover = () => {
    const cardPreview = document.querySelectorAll('.preview');
    const cardPreviewImg = document.querySelector('.preview img');

    cardPreview.forEach(item => {    
        item.addEventListener("mouseover", event => {
            item.getElementsByTagName("img")[0].classList.add('add-color');
        });
        
        item.addEventListener("mouseout", event => {
            item.getElementsByTagName("img")[0].classList.remove('add-color');
        });
    })

}

const app = () => {
    navToggle();
    cardHover();
    contactToggle();
}

app();