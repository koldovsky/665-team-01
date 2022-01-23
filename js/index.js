(function() {
    "use strict";

    const burgerMenu = document.querySelector('.header__burger');
    const socialMenu = document.querySelector('.social__menu');
    const headerMenu = document.querySelector('.header__menu');
        burgerMenu.addEventListener("click", function(e) {
           document.body.classList.toggle('lock'); 
           burgerMenu.classList.toggle('active');
           headerMenu.classList.toggle('active');
        socialMenu.classList.toggle('active');
    });
})();

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
       menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick (e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            
            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}