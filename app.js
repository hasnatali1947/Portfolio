/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */

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
const description = document.getElementById('description');
const technologies = document.getElementById('techs');
const technologies2 = document.getElementById('techs2');
const technologies3 = document.getElementById('techs3');
const SeeLive = document.getElementById('SeeLive-button');
const SeeSource = document.getElementById('SeeSource-button');
const form = document.getElementById('form');
const error = document.getElementById('error');
const Name = document.getElementById('name');
const Name2 = document.getElementById('name2');
const textArea = document.getElementById('textArea');
const email = document.getElementById('email');

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
    name: 'Worrior Cars',
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: 'IMAGES/worrior-cars.png',
    technologies: ['html', 'css', 'javaScript'],
    SeeLive: 'https://hasnatali1947.github.io/Warrior-cars/',
    SeeSource: 'https://github.com/hasnatali1947/Warrior-cars#-live-demo-',
  },
  {
    name: 'Multi-post',
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: 'IMAGES/desktop-2.png',
    technologies: ['html', 'css', 'javaScript'],
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: 'IMAGES/desktop-3.png',
    technologies: ['html', 'css', 'javaScript'],
  },
  {
    name: 'Multi-post',
    description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
    imagesrc: 'IMAGES/desktop-4.png',
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
  description.innerHTML = storeData[0].description;
  technologies.innerHTML = storeData[0].technologies[0];
  technologies2.innerHTML = storeData[0].technologies[1];
  technologies3.innerHTML = storeData[0].technologies[2];
}

function Seeproject2() {
  modal.style.display = 'flex';
  modal.style.visibility = 'visible';
  maincontent.classList.add('blur');
  projectImage.src = storeData[1].imagesrc;
  projectTitle.innerHTML = storeData[1].name;
  description.innerHTML = storeData[1].description;
  technologies.innerHTML = storeData[0].technologies[0];
  technologies2.innerHTML = storeData[0].technologies[1];
  technologies3.innerHTML = storeData[0].technologies[2];
}

function Seeproject3() {
  modal.style.display = 'flex';
  modal.style.visibility = 'visible';
  maincontent.classList.add('blur');
  projectImage.src = storeData[2].imagesrc;
  projectTitle.innerHTML = storeData[2].name;
  description.innerHTML = storeData[2].description;
  technologies.innerHTML = storeData[0].technologies[0];
  technologies2.innerHTML = storeData[0].technologies[1];
  technologies3.innerHTML = storeData[0].technologies[2];
}

function Seeproject4() {
  modal.style.display = 'flex';
  modal.style.visibility = 'visible';
  maincontent.classList.add('blur');
  projectImage.src = storeData[3].imagesrc;
  projectTitle.innerHTML = storeData[3].name;
  description.innerHTML = storeData[3].description;
  technologies.innerHTML = storeData[0].technologies[0];
  technologies2.innerHTML = storeData[0].technologies[1];
  technologies3.innerHTML = storeData[0].technologies[2];
}

SeeLive.addEventListener('click', () => {
  const link = document.createElement('a');
  link.setAttribute('href', storeData[0].SeeLive);
  link.setAttribute('target', '_blank');
  link.click();
});

SeeSource.addEventListener('click', () => {
  const link = document.createElement('a');
  link.setAttribute('href', storeData[0].SeeSource);
  link.setAttribute('traget', '_blank');
  link.click();
});

/// //////form///////////////

form.addEventListener('submit', ((e) => {
  e.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
  } else {
    error.classList.toggle('showError');
    setTimeout(() => {
      email.value = email.value.toLowerCase();
      error.classList.toggle('showError');
    }, [3000]);
  }
}));

/// ////Local Storage////////////

form.addEventListener('keyup', () => {
  const object = {
    name: Name.value,
    email: email.value,
    textArea: textArea.value,
  };
  localStorage.mobilecontact = JSON.stringify(object);
});

window.addEventListener('load', () => {
  const objInLocalStorage = JSON.parse(localStorage.mobilecontact);
  Name.value = objInLocalStorage.name;
  email.value = objInLocalStorage.email;
  textArea.value = objInLocalStorage.textArea;
});
