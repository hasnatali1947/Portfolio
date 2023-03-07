const menuLinks = document.getElementById('menuChild');
const hamburger = document.getElementById('menuIcon');
const maincontent = document.getElementById('mobmain');
const logo = document.getElementById('logo');
const navlinks = document.querySelectorAll('.a');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', (() => {
  menuLinks.style.display = 'flex';
  menuLinks.style.visibility = 'visible';
  hamburger.style.display = 'none';
  maincontent.classList.add('blur');
  logo.classList.add('blur');
}));

closeMenu.addEventListener('click', (() => {
  menuLinks.style.display = 'none';
  menuLinks.style.visibility = 'hidden';
  hamburger.style.display = 'flex';
  maincontent.classList.remove('blur');
  logo.classList.remove('blur');
}));

for (let i = 0; i < navlinks.length; i += 1) {
  navlinks[i].addEventListener('click', (e) => {
    maincontent.classList.remove('blur');
    logo.classList.remove('blur');
    menuLinks.style.display = 'none';
    menuLinks.style.visibility = 'hidden';
    hamburger.classList.remove('blur');
    hamburger.style.display = 'flex';
  });
}
