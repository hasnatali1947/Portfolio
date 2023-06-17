/* eslint-disable*/

const menuLinks = document.getElementById('menuChild');
const hamburger = document.getElementById('menuIcon');
const maincontent = document.getElementById('mobmain');
const logo = document.getElementById('logo');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const navlinks = document.querySelectorAll('.a');
const seeproject = document.querySelectorAll('.Button-SeeProject');
const desktopMenu = document.querySelector('.desktopMenu');
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
const modal = createModal();
document.body.appendChild(modal);

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

/// /////////cards////////////////////

function addGrayFilter(element) {
  element.classList.add('gray-filter');
}

function removeGrayFilter(element) {
  element.classList.remove('gray-filter');
}

function createModal() {
  const modal = document.createElement('article');
  modal.classList.add('modal');
  modal.id = 'modal';

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const modalTonicContainer = document.createElement('div');
  modalTonicContainer.classList.add('modal-tonic-container');

  const modalTonicHeading = document.createElement('h2');
  modalTonicHeading.classList.add('modal-tonic');

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.classList.add('cross');
  closeButton.textContent = 'x';
  closeButton.addEventListener('click', disappearButton);

  const modalCanopy = document.createElement('div');
  modalCanopy.classList.add('modal-canopy');

  const backEndDevList = document.createElement('ul');
  backEndDevList.classList.add('back-end-dev-modal');

  const canopyModalHeading = document.createElement('h2');
  canopyModalHeading.classList.add('canopyModal');
  canopyModalHeading.textContent = 'CANOPY';

  const backEndDevItem = document.createElement('li');
  backEndDevItem.classList.add('back-modal');
  backEndDevItem.textContent = 'Back End Dev';

  const typeModalItem = document.createElement('li');
  typeModalItem.classList.add('Type2015-modal');
  typeModalItem.textContent = '2015';

  const portfolioIdCardList = document.createElement('ul');
  portfolioIdCardList.classList.add('portfolio-idcard');

  const idCardListItem = document.createElement('li');

  const idCardImage = document.createElement('img');
  idCardImage.classList.add('idcard-modal');
  idCardImage.src = '';
  idCardImage.alt = 'card 1';

  const loremButtonDiv = document.createElement('div');
  loremButtonDiv.classList.add('lorem-button-div');

  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.classList.add('lorem');
  descriptionParagraph.id = 'description';

  const languageButtonsDiv = document.createElement('div');
  languageButtonsDiv.classList.add('language-buttons-div');

  const languageButtonModal = document.createElement('div');
  languageButtonModal.classList.add('language-button-modal');

  const languageButton1 = document.createElement('div');
  languageButton1.classList.add('language-button');
  languageButton1.id = 'techs';

  const languageButton2 = document.createElement('div');
  languageButton2.classList.add('language-button');
  languageButton2.id = 'techs2';

  const languageButton3 = document.createElement('div');
  languageButton3.classList.add('language-button');
  languageButton3.id = 'techs3';

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons-div');

  const seeLiveButton = document.createElement('button');
  seeLiveButton.type = 'button';
  seeLiveButton.target = '_blank';
  seeLiveButton.id = 'SeeLive-button';
  seeLiveButton.classList.add('SeeLive-button');
  seeLiveButton.textContent = 'See Live';

  const seeLiveButtonIcon = document.createElement('img');
  seeLiveButtonIcon.classList.add('button-icon');
  seeLiveButtonIcon.src = 'ICONS/Icon.png';
  seeLiveButtonIcon.alt = '';

  seeLiveButton.appendChild(seeLiveButtonIcon);

  const seeSourceButton = document.createElement('button');
  seeSourceButton.type = 'button';
  seeSourceButton.id = 'SeeSource-button';
  seeSourceButton.classList.add('SeeSource-button');
  seeSourceButton.textContent = 'See Source';

  const seeSourceButtonIcon = document.createElement('img');
  seeSourceButtonIcon.classList.add('button-icon');
  seeSourceButtonIcon.src = 'ICONS/githubOnIcon.svg';
  seeSourceButtonIcon.alt = '';

  seeSourceButton.appendChild(seeSourceButtonIcon);

  buttonsDiv.appendChild(seeLiveButton);
  buttonsDiv.appendChild(seeSourceButton);

  languageButtonModal.appendChild(languageButton1);
  languageButtonModal.appendChild(languageButton2);
  languageButtonModal.appendChild(languageButton3);

  languageButtonsDiv.appendChild(languageButtonModal);
  languageButtonsDiv.appendChild(buttonsDiv);

  loremButtonDiv.appendChild(descriptionParagraph);
  loremButtonDiv.appendChild(languageButtonsDiv);

  idCardListItem.appendChild(idCardImage);
  portfolioIdCardList.appendChild(idCardListItem);

  backEndDevList.appendChild(canopyModalHeading);
  backEndDevList.appendChild(backEndDevItem);
  backEndDevList.appendChild(typeModalItem);

  modalCanopy.appendChild(backEndDevList);

  modalTonicContainer.appendChild(modalTonicHeading);
  modalTonicContainer.appendChild(closeButton);

  modalContainer.appendChild(modalTonicContainer);
  modalContainer.appendChild(modalCanopy);
  modalContainer.appendChild(portfolioIdCardList);
  modalContainer.appendChild(loremButtonDiv);

  modal.appendChild(modalContainer);

  return modal;
}

/// //////////////////////////////////////////

const storeData = [
  {
    name: 'Worrior Cars',
    description: 'Warrior is a car company that has been creating impressive vehicles since 2001. Each car produced by Warrior is a testament to their commitment to excellence, incorporating the latest advancements in automotive engineering to provide drivers.',
    imagesrc: 'IMAGES/worrior-cars.png',
    technologies: ['html', 'css', 'javaScript'],
    SeeLive: 'https://hasnatali1947.github.io/Warrior-cars/',
    SeeSource: 'https://github.com/hasnatali1947/Warrior-cars#-live-demo-',
  },
  {
    name: 'TV-Show',
    description: 'This is a TV show list web app that fetches real time data from the server to show you TV shows list with number of likes. This project also includes a details page for the TV shows and comments added to each TV show.',
    imagesrc: 'IMAGES/Tv-Show.png',
    technologies: ['html', 'css', 'javaScript'],
    SeeLive: 'https://ubdanam.github.io/TV-Show/',
    SeeSource: 'https://github.com/hasnatali1947/TV-Show',
  },
  {
    name: 'Weather-App',
    description: 'This is a weather app project where users can check the weather for cities all over the world.',
    imagesrc: 'IMAGES/weather-app.png',
    technologies: ['html', 'css', 'javaScript'],
    SeeLive: 'https://weather-app-57lg.onrender.com/',
    SeeSource: 'https://github.com/hasnatali1947/Weather-App',
  },
  {
    name: 'Leaderboard',
    description: 'The leader-board website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leader-board API service.',
    imagesrc: 'IMAGES/leaderboard.png',
    technologies: ['html', 'css', 'javaScript'],
    SeeLive: 'https://hasnatali1947.github.io/Leaderboard/dist',
    SeeSource: 'https://github.com/hasnatali1947/Leaderboard',
  },
];

function disappearButton() {
  modal.style.display = 'none';
  maincontent.classList.remove('blur');
}

function SeeProject() {
  const modal = createModal();
  document.body.appendChild(modal);
  const closeButton = modal.querySelector('.cross');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    maincontent.classList.remove('blur');
  });
  const project = storeData[0];
  const projectImage = modal.querySelector('.idcard-modal');
  const projectTitle = modal.querySelector('.modal-tonic');
  const description = modal.querySelector('#description');
  const technologies = modal.querySelector('#techs');
  const technologies2 = modal.querySelector('#techs2');
  const technologies3 = modal.querySelector('#techs3');
  const seeLiveButton = modal.querySelector('#SeeLive-button');
  const seeSourceButton = modal.querySelector('#SeeSource-button');

  projectImage.src = project.imagesrc;
  projectTitle.innerHTML = project.name;
  description.innerHTML = project.description;
  technologies.innerHTML = project.technologies[0];
  technologies2.innerHTML = project.technologies[1];
  technologies3.innerHTML = project.technologies[2];

  seeLiveButton.addEventListener('click', () => {
    window.open(project.SeeLive, '_blank');
  });

  seeSourceButton.addEventListener('click', () => {
    window.open(project.SeeSource, '_blank');
  });

  modal.style.display = 'flex';
  maincontent.classList.add('blur');
}

function Seeproject2() {
  const modal = createModal();
  document.body.appendChild(modal);

  const closeButton = modal.querySelector('.cross');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    maincontent.classList.remove('blur');
  });

  const project = storeData[1];
  const projectImage = modal.querySelector('.idcard-modal');
  const projectTitle = modal.querySelector('.modal-tonic');
  const description = modal.querySelector('#description');
  const technologies = modal.querySelector('#techs');
  const technologies2 = modal.querySelector('#techs2');
  const technologies3 = modal.querySelector('#techs3');
  const seeLiveButton = modal.querySelector('#SeeLive-button');
  const seeSourceButton = modal.querySelector('#SeeSource-button');

  projectImage.src = project.imagesrc;
  projectTitle.innerHTML = project.name;
  description.innerHTML = project.description;
  technologies.innerHTML = project.technologies[0];
  technologies2.innerHTML = project.technologies[1];
  technologies3.innerHTML = project.technologies[2];

  seeLiveButton.addEventListener('click', () => {
    window.open(project.SeeLive, '_blank');
  });

  seeSourceButton.addEventListener('click', () => {
    window.open(project.SeeSource, '_blank');
  });

  modal.style.display = 'flex';
  maincontent.classList.add('blur');
}

function Seeproject3() {
  const modal = createModal();
  document.body.appendChild(modal);

  const closeButton = modal.querySelector('.cross');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    maincontent.classList.remove('blur');
  });

  const project = storeData[2];
  const projectImage = modal.querySelector('.idcard-modal');
  const projectTitle = modal.querySelector('.modal-tonic');
  const description = modal.querySelector('#description');
  const technologies = modal.querySelector('#techs');
  const technologies2 = modal.querySelector('#techs2');
  const technologies3 = modal.querySelector('#techs3');
  const seeLiveButton = modal.querySelector('#SeeLive-button');
  const seeSourceButton = modal.querySelector('#SeeSource-button');

  projectImage.src = project.imagesrc;
  projectTitle.innerHTML = project.name;
  description.innerHTML = project.description;
  technologies.innerHTML = project.technologies[0];
  technologies2.innerHTML = project.technologies[1];
  technologies3.innerHTML = project.technologies[2];

  seeLiveButton.addEventListener('click', () => {
    window.open(project.SeeLive, '_blank');
  });

  seeSourceButton.addEventListener('click', () => {
    window.open(project.SeeSource, '_blank');
  });

  modal.style.display = 'flex';
  maincontent.classList.add('blur');
}

function Seeproject4() {
  const modal = createModal();
  document.body.appendChild(modal);

  const closeButton = modal.querySelector('.cross');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    maincontent.classList.remove('blur');
  });

  const project = storeData[3];
  const projectImage = modal.querySelector('.idcard-modal');
  const projectTitle = modal.querySelector('.modal-tonic');
  const description = modal.querySelector('#description');
  const technologies = modal.querySelector('#techs');
  const technologies2 = modal.querySelector('#techs2');
  const technologies3 = modal.querySelector('#techs3');
  const seeLiveButton = modal.querySelector('#SeeLive-button');
  const seeSourceButton = modal.querySelector('#SeeSource-button');

  projectImage.src = project.imagesrc;
  projectTitle.innerHTML = project.name;
  description.innerHTML = project.description;
  technologies.innerHTML = project.technologies[0];
  technologies2.innerHTML = project.technologies[1];
  technologies3.innerHTML = project.technologies[2];

  seeLiveButton.addEventListener('click', () => {
    window.open(project.SeeLive, '_blank');
  });

  seeSourceButton.addEventListener('click', () => {
    window.open(project.SeeSource, '_blank');
  });

  modal.style.display = 'flex';
  maincontent.classList.add('blur');
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
