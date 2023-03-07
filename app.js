const menuLinks = document.getElementById('menuChild');
const hamburger = document.getElementById('menuIcon');
const maincontent = document.getElementById('mobmain');
const logo = document.getElementById('logo');
const navlink = document.getElementsByClassName('a') 
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', (() => {
  menuLinks.style.display = 'flex';
  menuLinks.style.visibility = 'visible';
  hamburger.style.display = 'none';
  maincontent.classList.add('blur');
  logo.classList.add('blur');
}));

const closeMenu = document.querySelector('.closeMenu');

closeMenu.addEventListener('click', (() => {
  menuLinks.style.display = 'none';
  menuLinks.style.visibility = 'hidden';
  hamburger.style.display = 'flex';
  maincontent.classList.remove('blur');
  logo.classList.remove('blur');
}));
