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
const form = document.getElementById('form');
const form2 = document.getElementById('form2');
const error = document.getElementById('error');
const error2 = document.getElementById('error2');
const Name = document.getElementById('name');
const Name2 = document.getElementById('name2');
const textArea = document.getElementById('textArea');
const textArea2 = document.getElementById('textArea2');
const email2 = document.getElementById('email2');
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

form2.addEventListener('submit', ((e) => {
  e.preventDefault();
  if (email2.value === email2.value.toLowerCase()) {
    form2.submit();
  } else {
    error2.classList.toggle('showError');
    setTimeout(() => {
      email2.value = email2.value.toLowerCase();
      error2.classList.toggle('showError');
    }, [3000]);
  }
}));

form2.addEventListener('keyup', () => {
  const userObj = {
    name: Name2.value,
    email: email2.value,
    textArea: textArea2.value,
  };
  localStorage.contactValue = JSON.stringify(userObj);
});

window.addEventListener('DOMContentLoaded', () => {
  const objInLocalStorage = JSON.parse(localStorage.contactValue);
  Name2.value = objInLocalStorage.name;
  email2.value = objInLocalStorage.email;
  textArea2.value = objInLocalStorage.textArea;
});
