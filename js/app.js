/*=============== toggle icon navbar*/
let mennuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

mennuIcon.onclick = () => {
    mennuIcon.classList.toggle('bx-x');
    mennuIcon.classList.toggle('active');
};

/*------ scroll section*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        };
    });
/*------ scroll section*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
/*=======remove togggle*/
    mennuIcon.classList.remove('bx-x');
    mennuIcon.classList.remove('active');
};
