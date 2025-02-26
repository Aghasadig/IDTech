const productList = document.querySelector(".product-list");
const searchBtn = document.querySelector(".search-btn");

let response;

const allProducts = document
  .querySelector(".allProducts")
  .addEventListener("click", () => getProducts());
const electronics = document
  .querySelector(".electronics")
  .addEventListener("click", () => getProducts("electronics"));
const jewelry = document
  .querySelector(".jewelry")
  .addEventListener("click", () => getProducts("jewelery"));
const menClothing = document
  .querySelector(".menClothing")
  .addEventListener("click", () => getProducts("men's clothing"));
const womenClothing = document
  .querySelector(".womenClothing")
  .addEventListener("click", () => getProducts("women's clothing"));

async function getProducts(category = "") {
  let url = "https://fakestoreapi.com/products";
  if (category) {
    url += `/category/${category}`;
  }

  response = await fetch(url)
    .then((res) => res)
    .then((data) => data.json());

  productList.innerHTML = "";

  response.forEach((product) => {
    productList.innerHTML += `
        <div class="card-item">
                <div class="img-wrapper"> <img src="${product.image}" alt="${product.title}"> </div>
            <h3 class="title">${product.title}</h3>
            <p class="price">${product.price} <b>$</b></p>
            </div>
        `;
  });
}

getProducts();

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputVal = document.querySelector("#searchInput").value.toLowerCase();

  const filteredProducts = response.filter((product) =>
    product.title.toLowerCase().includes(inputVal)
  );

  productList.innerHTML = "";

  filteredProducts.forEach((product) => {
    productList.innerHTML += `
          <div class="card-item">
                  <div class="img-wrapper"> <img src="${product.image}" alt="${product.title}"> </div>
              <h3 class="title">${product.title}</h3>
              <p class="price">${product.price} <b>$</b></p>
              </div>
          `;
  });
});
