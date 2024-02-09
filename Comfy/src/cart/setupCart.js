// import
import { getStorageItem, setStorageItem, getElement } from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id == id);
  if (!item) {
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    console.log(product);
    cart = [...cart, product];
    console.log(cart);
    addToCartDOM(product);
  } else {
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")];
    const newAmount = items.find((value) => {
      return value.dataset.id == id;
    });
    console.log(newAmount);
    newAmount.textContent = amount;
  }
  displayCartItemCount();
  displayCartTotal();
  setStorageItem("cart", cart);
  openCart();
};

const displayCartItemCount = () => {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemCountDOM.textContent = amount;
};

const displayCartTotal = () => {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDOM.textContent = `Total : $${total / 100}`;
};
const displayCartItemsDOM = () => {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
};
const setupCartFunctionality = () => {
  cartItemsDOM.addEventListener("click", (event) => {
    const element = event.target;
    const parent = element.parentElement;
    const id = element.dataset.id;
    const parentID = parent.dataset.id;
    if (element.classList.contains("cart-item-remove-btn")) {
      removeItem(id);
      parent.parentElement.remove();
    }
    displayCartItemCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  });
};

const removeItem = (id) => {
  cart = cart.filter((cartItem) => cartItem.id != id);
};

const increaseAmount = (id) => {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id == id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
};

const init = () => {
  displayCartItemCount();
  displayCartTotal();
  displayCartItemsDOM();
  setupCartFunctionality();
};

init();
