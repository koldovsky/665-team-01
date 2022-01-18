"use strict"

const burgerMenu = document.querySelector('header__burger');
if (burgerMenu) {
    const headerMenu = document.querySelector('header__menu');
    burgerMenu.addEventListener("click", function(e) {
       burgerMenu.classList.toggle('_active');
       headerMenu.classList.toggle('_active');
    });
}