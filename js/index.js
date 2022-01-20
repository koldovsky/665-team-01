"use strict"

const burgerMenu = document.querySelector('.header__burger');
const socialMenu = document.querySelector('.social__menu');
if (burgerMenu) {
    const headerMenu = document.querySelector('.header__menu');
    burgerMenu.addEventListener("click", function(e) {
       document.body.classList.toggle('lock'); 
       burgerMenu.classList.toggle('active');
       headerMenu.classList.toggle('active');
       socialMenu.classList.toggle('active');
    });
}