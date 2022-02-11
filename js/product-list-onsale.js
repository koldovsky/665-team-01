(function () {
   const products = [
       {
           id: "1",
           title: "Dowson DDR100 Acoustic Guitar",
           imgUrl: "img/onsale/dowsonddr300.jpeg",
           price: "$180.00"
       },
       {
           id: "2",
           title: "AER B-Flat Professional Bass Horn",
           imgUrl: "img/onsale/AERBFlat.jpeg",
           price: "$300.00"
       },
       {
           id: "3",
           title: "Lewis Lewel ST-1 Student Violin",
           imgUrl: "img/onsale/LewisLewelST-1.jpeg",
           price: "$200.00"
       },
   ]

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

    renderProducts(products);
})();