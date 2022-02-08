(function () {
    let products;
    let rate = 1;
    let currentCategory = 'electric-guitar';

    async function loadProducts() {
        const response = await fetch('products-accordion-best-prices.json');
        products = await response.json();
        renderProducts();
    }

    function renderProducts() {
        const productsContainer = document.querySelector('.best-prices__product-cards');
        productsContainer.innerHTML = '';
        const productsToShow = products.filter(productCard => productCard.category === currentCategory);
        for (const product of productsToShow) {            
            productsContainer.innerHTML += `
                <div class="best-prices__product-card">
                    <a href="#" class="best-prices__product-card-link">
                        <img src="${product.imgUrl}" alt="${product.title}
                        class="best-prices__product-card-photo" />
                        <p class="best-prices__product-card-name">${product.title}</p>
                    </a>
                    <p class="best-prices__product-card-price">${(product.price * rate).toFixed(2)}</p>
                    <div class="add-to-cart__btn">
                        <a href="#">Add to Cart</a>
                    </div>
                </div>`;
        }
    }

    const tabs = document.querySelectorAll('.tab-nav');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', (event) => {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('tab-nav-active');
            event.target.classList.add('tab-nav-active');
        }
        currentCategory = tabs[i].id;
        renderProducts();
    });
}
document.querySelector('.best-prices__convert').addEventListener('click', convertCurrency);

async function convertCurrency() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
    const currencies = await response.json();
    const convertTo = document.querySelector('.best-prices__currency').value;
    rate = currencies.rates[convertTo];
    renderProducts();
}

loadProducts();

})();