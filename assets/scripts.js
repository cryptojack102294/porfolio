let navbar = document.querySelector('.navlink-wrapper');
let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

let navLinks = document.querySelectorAll('.navlink');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(lnk => lnk.classList.remove('active'));
        link.classList.add('active');
    });
    
});


