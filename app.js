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
// const technologies = document.querySelectorAll('.language-button');

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

function createWorkCard(name, description, imagesrc, technologies) {
  let techStacks = '';

  technologies.forEach((technologies) => {
    techStacks += ` <li>${technologies}</li>`;
  });

  const workHTML = document.createElement('article');
  workHTML.className = 'article';
  workHTML.innerHTML = `<img src='${imagesrc}' alt="work Image" class="workImage">
                      <div>
                          <div class="workTitle">${name}</div
                            <div class="modal-canopy">
                              <ul class="back-end-dev-modal">
                                <h2 class="canopyModal" >CANOPY</h2>
                                <li class="back-modal">Back End Dev</li>
                                <li class="Type2015-modal">2015</li>
                              </ul>
                            </div>
                          <p class="details" >${description}</p>
                          <div class="language-button-modal">
                              <ul>
                                ${techStacks}
                              </ul>
                          </div>
                          <button class="visitButton seeProject">See Project</button>
                      </div>`;
}

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
