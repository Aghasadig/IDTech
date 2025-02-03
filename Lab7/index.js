let wishlist = [];
const wishlistContainerElement = document.getElementById("wishlist-added-cards");
const cardsContainerElement = document.getElementById(
  "products-side-cards-container"
);
const favorites = [
  {
    id: 1,
    productName: "Bitcoin",
    price: "98.000$",
    image: "/images/bitcoin.jpg",
  },
  {
    id: 2,
    productName: "Boyrek",
    price: "50.000$",
    image: "/images/bobrek.jpeg",
  },
  {
    id: 3,
    productName: "Ford F-150",
    price: "85.000$",
    image: "/images/ford.jpg",
  },
  {
    id: 4,
    productName: "Heart",
    price: "178.000$",
    image: "/images/heart.jpg",
  },
  {
    id: 5,
    productName: "Marlboro castler",
    price: "50$",
    image: "/images/marlboro.png",
  },
  {
    id: 6,
    productName: "Mercedes Maybach",
    price: "101.000$",
    image: "/images/mercedes.jpg",
  },
  {
    id: 7,
    productName: "Samsuns S25 Ultra",
    price: "3.000$",
    image: "/images/Samsung.jpg",
  },
  {
    id: 8,
    productName: "Tiny house",
    price: "50.000$",
    image: "/images/tiny-house.jpg",
  },
];

favorites.forEach((products) => {
  cardsContainerElement.innerHTML += `
        <div class="products-card" >
            <div class="products-image">
                <img src="${products.image}" alt="bitcoin">
            </div>
            <h3 class="products-title"> ${products.productName} <br>
              <span> Price: <span  style="color: gold;">${products.price}$</span></span>
            </h3>
            <button data-id="${products.id}" class="products-card-btn">
              add to wishlist
            </button>
        </div>
    `;
});

const productCardEvent = document.querySelectorAll(".products-card-btn");

productCardEvent.forEach((elements) => {
  elements.addEventListener("click", productCheck);
});

function productCheck(event) {
  const id = Number(event.target.dataset.id);

  const hasWishlistElement = wishlist.some(
    (wishlistElement) => wishlistElement.id === id
  );
  

  if (hasWishlistElement) {
    wishlist = wishlist.filter((wishlistElement) => wishlistElement.id !== id);
  } 
  else {
    const product = favorites.find((favoriteItem) => favoriteItem.id === id);

    wishlist.push(product);
  }
  showWishlist();
}

function showWishlist(){
    wishlistContainerElement.innerHTML="";

    wishlist.forEach((products) => {
        wishlistContainerElement.innerHTML += `
              <div class="products-card" >
                  <div class="products-image">
                      <img src="${products.image}" alt="bitcoin">
                  </div>
                  <h3 class="products-title"> ${products.productName} <br>
                    <span> Price: <span  style="color: gold;">${products.price}$</span></span>
                  </h3>
                  <button data-id="${products.id}" class="products-card-btn">
                    add to wishlist
                  </button>
              </div>
          `;
      });
}





