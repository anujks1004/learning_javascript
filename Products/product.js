const productDOM = document.querySelector(".product");
const url = "https://course-api.com/javascript-store-single-product";

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class="error">There was a problem loading the product</p>`;
  }
};

const displayProduct = (data) => {
  const colorsList = data.fields.colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join("");
  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${data.fields.image[0].url}" class="img" alt="" />
        <div class="product-info">
          <h3>${data.fields.name}</h3>
          <h5>${data.fields.company}</h5>
          <span>$${data.fields.price / 100}</span>
          <div class="colors">
            ${colorsList}
          </div>
          <p>
            ${data.fields.description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
