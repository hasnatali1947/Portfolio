const menuLinks = document.getElementById('menuChild');
const hamburger = document.getElementById('menuIcon');
const maincontent = document.getElementById('mobmain');
const logo = document.getElementById('logo');
const navlinks = document.getElementsByClassName('a') 
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

for (let navLink of navlinks) {
  console.log(navLink)
  navLink.addEventListener('click', () => {
    maincontent.classList.remove('blur');
    logo.classList.remove('blur');
    menuLinks.style.display = 'none';
    menuLinks.style.visibility = 'hidden';
    hamburger.classList.remove('blur');
    hamburger.style.display = 'flex';
  })
}
