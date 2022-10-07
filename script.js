/** @format */
// import Lightbox from "./lightbox";
// Lightbox.activate

const cart = document.getElementById("myCart");
const cartContainer = document.getElementById("cart-container");

cart.addEventListener("click", () => {
  if (cartContainer.style.display === "none") {
    cartContainer.style.display = "block";
  } else {
    cartContainer.style.display = "none";
  }
});

const menu = document.getElementById("menu");
const navList = document.getElementById("nav-list");
menu.addEventListener("click", () => {
  navList.classList.add("active");
});

const close = document.getElementById("close");
close.addEventListener("click", () => {
  navList.classList.remove("active");
});

const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const cartValue = document.getElementById("cartValue");
const boughtValue = document.getElementById("cart-value");
const CheckOut = document.getElementById("CheckOut");
const Trash = document.getElementById("delete");
const CheckBtn = document.getElementById("check-Btn");
const addCart = document.getElementById("addCart");
const CheckOutInfo = document.getElementById("cart-container");
let NumberCart = 0;

increment.addEventListener("click", () => {
  NumberCart += 1;

  cartValue.innerText = NumberCart;
  if (NumberCart <= 0) {
    CheckOutInfo.innerHTML = "Your List is empty";
  }
});
addCart.addEventListener("click", () => {
  boughtValue.innerHTML = NumberCart;
  if (NumberCart <= 0) {
    CheckOutInfo.innerHTML = "Your List is empty";
  }
});

decrement.addEventListener("click", () => {
  if (NumberCart <= 0) {
    CheckOutInfo.innerHTML = "Your List is empty";
    alert("Cant go less than 0 chief");
    return;
  }
  NumberCart -= 1;

  cartValue.innerText = NumberCart;
});

const actualPrice = document.getElementById("actual-price");
const discount = document.getElementById("discount");
const percent = document.getElementById("percent");
let price = 250;
let percentage = 50;
let totalValue = (price * percentage) / 100;
percent.innerHTML = `$${percentage}`;
actualPrice.innerHTML = `$${price}`;
discount.innerHTML = `$${totalValue}`;

function changeImage(e) {
  activeImage.src = e.target.src;
}

const activeImage = document.getElementById("active-img");
const productImages = document.querySelectorAll(".shoe-img");
productImages.forEach((image) => image.addEventListener("click", changeImage));

const rightControl = document.getElementById("right");
const leftControl = document.getElementById("left");

for (i = 0; i < productImages.length; i++) {
  let idx = 0;

  rightControl.addEventListener("click", () => {
    idx++;
    if (idx > productImages.length - 1) {
      idx = 0;
    }
    let newImage = productImages[idx].src;
    activeImage.src = newImage;
  });

  leftControl.addEventListener("click", () => {
    idx--;
    if (idx < 0) {
      idx = productImages.length - 1;
    }
    let newImage = productImages[idx].src;
    activeImage.src = newImage;
  });
}
