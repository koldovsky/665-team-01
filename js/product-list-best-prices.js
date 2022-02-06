(function () {
    let products;

    async function loadProducts() {
        const response = await fetch('products-accordion-best-prices.json');
        products = await response.json();
        renderProducts(products);
    }

    function renderProducts(products) {
        for (const product of products) {
            const productsCardBody = `
        <div class="best-prices__product-card">
          <a href="#" class="best-prices__product-card-link">
            <img src="${product.imgUrl}" alt="${product.title}
              class="best-prices__product-card-photo" />
            <p class="best-prices__product-card-name">
              ${product.title}
            </p>
          </a>
          <p class="best-prices__product-card-price">${product.price}</p>
          <div class="add-to-cart__btn">
            <a href="#">Add to Cart</a>
          </div>
        </div>`;
            if (product.id < 5) {
                let productsContainer = document.querySelector('.content-electric-guitars');
                productsContainer.innerHTML += productsCardBody;
            } else if (product.id >= 5 && product.id < 9) {
                let productsContainer = document.querySelector('.content-acoustic-guitars');
                productsContainer.innerHTML += productsCardBody;
            } else if (product.id >= 9 && product.id < 13) {
                let productsContainer = document.querySelector('.content-drums');
                productsContainer.innerHTML += productsCardBody;
            } else if (product.id >= 13 && product.id < 17) {
                let productsContainer = document.querySelector('.content-orchestric');
                productsContainer.innerHTML += productsCardBody;
            } else if (product.id >= 17 && product.id < 21) {
                let productsContainer = document.querySelector('.content-other');
                productsContainer.innerHTML += productsCardBody;
            }
        }
    }

    const tabs = document.querySelectorAll('.tab-nav');
    const contents = document.querySelectorAll('.contents');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', (event) => {
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('tab-nav-active');
            }
            event.target.classList.add('tab-nav-active');

            for (let k = 0; k < contents.length; k++) {
                contents[k].classList.remove('content-active');
            }
            contents[i].classList.add('content-active');
        })
    }

    loadProducts(products);

})();