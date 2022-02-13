(function () {
    const slides = [
        `<div class="best-selling__card">
              <img class="preview-img" alt="Ericson Black&White Snare Drum" src="img/drum.jpeg">
              <p class="best-selling__subheading">Ericson Black&White Snare Drum</p>
              <div class="best-selling__price">
                <p>$115.00</p>
              </div>
              <div class="add-to-cart-best-selling__btn">
                <a href="#">Add to Cart</a>
              </div>
            </div>`,
        `<div class="best-selling__card">
              <img class="preview-img" alt="Winston WR-100 Electric Guitar" src="img/red-guitar.jpeg">
              <p class="best-selling__subheading">Winston WR-100 Electric Guitar</p>
              <div class="best-selling__price">
                <p>$320.00</p>
              </div>
              <div class="add-to-cart-best-selling__btn">
                <a href="#">Add to Cart</a>
              </div>
            </div>`,
        `<div class="best-selling__card">
              <img class="preview-img" alt="Jackson RI 405 Electric Guitar" src="img/guitar.jpeg">
              <p class="best-selling__subheading">Jackson RI 405 Electric Guitar</p>
              <div class="best-selling__price">
                <p>$300.00</p>
              </div>
              <div class="add-to-cart-best-selling__btn">
                <a href="#">Add to Cart</a>
              </div>
            </div>`,
        `<div class="best-selling__card">
              <img class="preview-img" alt="Jiwa Studio JWL100 Tambourine" src="img/tamb.jpeg">
              <p class="best-selling__subheading">Jiwa Studio JWL100 Tambourine</p>
              <div class="best-selling__price">
                <p>$50.00</p>
              </div>
              <div class="add-to-cart-best-selling__btn">
                <a href="#">Add to Cart</a>
              </div>
            </div>`
    ];

    let currentSlideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.best-selling__carousel-slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth >= 768) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth >= 850) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
                if (window.innerWidth >= 992) {
                    const fourSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
                    slideContainer.innerHTML += slides[fourSlideIdx];
                    // const fiveSlideIdx = fourSlideIdx + 1 >= slides.length ? 0 : fourSlideIdx + 1;
                    // slideContainer.innerHTML += slides[fiveSlideIdx];
                    // const sixSlideIdx = fiveSlideIdx + 1 >= slides.length ? 0 : fiveSlideIdx + 1;
                    // slideContainer.innerHTML += slides[sixSlideIdx];
                }
            }
        }
    }

    function showNextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        showCurrentSlide();
    }

    function showPrevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    document.querySelector('.best-selling__carousel-forward').addEventListener("click", showNextSlide);
    document.querySelector('.best-selling__carousel-back').addEventListener("click", showPrevSlide);

    window.addEventListener('resize', showCurrentSlide);
})();