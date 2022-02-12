(function () {
  
    async function loadProducts() {
      const response = await fetch('products-onsale.json');
      const products = await response.json();
      renderProducts(products);
    }
      

   function renderProducts(products) {
       const prodactsContainer = document.querySelector(".onsale__cards");
       for (const product of products) {
        prodactsContainer.innerHTML += `
        <div class="onsale__item item-instruments">
        <div class="item-instruments__img">
          <img src="${product.imgUrl}" alt="${product.title}">
        </div>
        <div class="item-instruments__title">${product.title}</div>
        <div class="item-instruments__price">${product.price}</div>
        <div class="item-instruments__btn">
          <a href="#">Add to Cart</a>
        </div>
        </div>
        `;
       }
   }

    loadProducts();
})();