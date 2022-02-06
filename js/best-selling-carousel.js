(function () {

    const products = [
        {
            id: "1",
            title: "Ericson Black&White Snare Drum",
            imgUrl: "img/drum.jpeg",
            price: 180.99
        },
        {
            id: "2",
            title: "Winston WR-100 Electric Guitar",
            imgUrl: "img/red-guitar.jpeg",
            price: 320.99
        },
        {
            id: "3",
            title: "Jackson RI 405 Electric Guitar",
            imgUrl: "img/guitar.jpeg",
            price: 300.99
        },
        {
            id: "4",
            title: "Jiwa Studio JWL100 Single Row Tambourine",
            imgUrl: "img/tamb.jpeg",
            price: 50.99
        }
    ];

    function renderProducts(products) {
        const productsContainer = document.querySelector('.best-selling-cards__container');
        for (const product of products) {
            productsContainer.innerHTML += `
        <div class="best-selling__card">
              <img class="preview-img" alt="${product.title}" src="${product.imgUrl}">
              <p class="best-selling__subheading">${product.title}</p>
              <div class="best-selling__price">${product.price}</div>
              <div class="add-to-cart-best-selling__btn">
                <a href="#">Add to Cart</a>
              </div>
        </div>`;
        }
    }
    renderProducts(products);
})();