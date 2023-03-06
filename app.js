let menuLinks = document.getElementById('menuChild')
let hamburger = document.getElementById('menuIcon')
let iconCancel = document.getElementById('cancel-icon')
let maincontent = document.getElementById('mobmain')
let logo = document.getElementById('logo')

function OpenMenu (){
    menuLinks.style.display = "flex"
    menuLinks.style.visibility = "visible"
    hamburger.style.display = "none"
    maincontent.classList.add("blur")
    logo.classList.add("blur")
}

function CloseMenu (){
    menuLinks.style.display = "none"
    menuLinks.style.visibility= "hidden"
    hamburger.style.display = "flex"
    maincontent.classList.remove("blur")
    logo.classList.remove("blur")
}