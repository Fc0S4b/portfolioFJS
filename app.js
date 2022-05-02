const barBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const navbar = document.querySelector('.navbar');

barBtn.addEventListener('click', () => {
  links.classList.toggle('show-links');
  barBtn.classList.toggle('rotate');
});

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove('show-links');

    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    console.log(navHeight);
    const widthDoc = screen.width;
    console.log(widthDoc);
    let position = element.offsetTop - navHeight;

    if (widthDoc <= 643) {
      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
    barBtn.classList.toggle('rotate');
  });
});


const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();