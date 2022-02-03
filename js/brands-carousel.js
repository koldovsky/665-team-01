(function() {
   const slides = [
            `<div class="brands__body">
                <img class="brands__img" src="img/brands/parker.svg" alt="parker">
            </div>`,
            `<div class="brands__body">
                 <img class="brands__img" src="img/brands/musiccountry.svg" alt="musiccountry">
            </div>`,
            `<div class="brands__body">
                 <img class="brands__img" src="img/brands/daguisto.svg" alt="daguisto">
            </div>`,
             `<div class="brands__body">
                 <img class="brands__img" src="img/brands/dmx.svg" alt="dmx">
             </div>`,
            `<div class="brands__body">
                 <img class="brands__img" src="img/brands/sonymusic.svg" alt="sony">
            </div>`,
            `<div class="brands__body">
                 <img class="brands__img" src="img/brands/guitarcenter.svg" alt="guitarcenter">
            </div>`,
            `<div class="brands__body">
                 <img class="brands__img" src="img/brands/v2.svg" alt="v2">
            </div>`,

   ];

    let currentSlideIdx = 0;

    function showCurrentSlide() {
         const slideContainer = document.querySelector('.brands__carousel-slide-container');
         slideContainer.innerHTML = slides[currentSlideIdx];
         if (window.innerWidth >= 500) {
             const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
             slideContainer.innerHTML += slides[secondSlideIdx];
             if (window.innerWidth >= 750) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx]; 
                if (window.innerWidth >= 990) {
                    const fourSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
                    slideContainer.innerHTML += slides[fourSlideIdx];
                    const fiveSlideIdx = fourSlideIdx + 1 >= slides.length ? 0 : fourSlideIdx + 1;
                    slideContainer.innerHTML += slides[fiveSlideIdx];
                    const sixSlideIdx = fiveSlideIdx + 1 >= slides.length ? 0 : fiveSlideIdx + 1;
                    slideContainer.innerHTML += slides[sixSlideIdx];
                 }  
             }
         }
    }

    function showNextSlide () {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        showCurrentSlide();
    }

    function showPrevSlide () {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    document.querySelector('.brands__carousel-forward').addEventListener("click", showNextSlide);
    document.querySelector('.brands__carousel-back').addEventListener("click", showPrevSlide);
    
    window.addEventListener('resize', showCurrentSlide);

})();