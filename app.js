/* eslint-disable no-unused-vars */
const menuLinks = document.getElementById('menuChild');
const hamburger = document.getElementById('menuIcon');
const maincontent = document.getElementById('mobmain');
const logo = document.getElementById('logo');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const navlinks = document.querySelectorAll('.a');
const seeproject = document.querySelectorAll('.Button-SeeProject');
const desktopMenu = document.querySelector('.desktopMenu');
const modal = document.querySelector('#modal');
const projectImage = document.querySelector('.idcard-modal');
const projectTitle = document.querySelector('.modal-tonic');

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
  navlinks[i].addEventListener('click', () => {
    maincontent.classList.remove('blur');
    logo.classList.remove('blur');
    menuLinks.style.display = 'none';
    menuLinks.style.visibility = 'hidden';
    hamburger.classList.remove('blur');
    hamburger.style.display = 'flex';
  });
}

/// /////////cards/////////

const storeData = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: 'Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'javaScript'],
  },
  {
    name: 'Multi-post',
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: 'desktop-2.png',
    technologies: ['html', 'css', 'javaScript'],
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: 'desktop-3.png',
    technologies: ['html', 'css', 'javaScript'],
  },
  {
    name: 'Multi-post',
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: 'desktop-4.png',
    technologies: ['html', 'css', 'javaScript'],
  },
];

function disappearButton() {
  modal.style.display = 'none';
  maincontent.classList.remove('blur');
}

function SeeProject() {
  modal.style.display = 'flex';
  modal.style.visibility = 'visible';
  maincontent.classList.add('blur');
  projectImage.src = storeData[0].imagesrc;
  projectTitle.innerHTML = storeData[0].name;
}

function Seeproject2() {
  modal.style.display = 'flex';
  modal.style.visibility = 'visible';
  maincontent.classList.add('blur');
  projectImage.src = storeData[1].imagesrc;
  projectTitle.innerHTML = storeData[1].name;
}

function Seeproject3() {
  modal.style.display = 'flex';
  modal.style.visibility = 'visible';
  maincontent.classList.add('blur');
  projectImage.src = storeData[2].imagesrc;
  projectTitle.innerHTML = storeData[2].name;
}

function Seeproject4() {
  modal.style.display = 'flex';
  modal.style.visibility = 'visible';
  maincontent.classList.add('blur');
  projectImage.src = storeData[3].imagesrc;
  projectTitle.innerHTML = storeData[3].name;
}
