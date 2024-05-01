const colors = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");
const quantityControl = document.querySelector(".quantity-control");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const quantity = document.querySelector(".quantity");
const addToCartBtn = document.querySelector(".add-to-cart");

let selectedColor = colors[0];
let selectedSize = sizes[0];
let currentQuantity = 1;

colors.forEach((color) => {
  color.addEventListener("click", () => {
    selectedColor.classList.remove("selected");
    color.classList.add("selected");
    selectedColor = color;
  });
});

colors.forEach((color) => {
  color.addEventListener("click", function () {
    colors.forEach((c) => c.querySelector("i.fa-check")?.remove());

    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fa-solid", "fa-check");
    color.appendChild(checkIcon);
  });
});

sizes.forEach((size) => {
  size.addEventListener("click", () => {
    selectedSize.classList.remove("selected");
    size.classList.add("selected");
    selectedSize = size;
  });
});

minusBtn.addEventListener("click", () => {
  if (currentQuantity > 1) {
    currentQuantity--;
    quantity.textContent = currentQuantity;
  }
});

plusBtn.addEventListener("click", () => {
  currentQuantity++;
  quantity.textContent = currentQuantity;
});

addToCartBtn.addEventListener("click", () => {
  const message = document.createElement("div");
  message.classList.add("message");

  const messageText = `Embrace Sideboard with Color ${selectedColor.getAttribute(
    "data-color"
  )} and Size ${selectedSize.textContent} added to cart`;
  console.log(selectedColor);

  message.textContent = messageText;

  const container = document.querySelector(".section5");
  container.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnails img");
  const productImage = document.querySelector(".product-image");
  const discountPriceElement = document.querySelector(".discount-price");
  const discountPercentElement = document.querySelector(".discount-percent");
  const totalPriceElement = document.querySelector(".total-price");

  const discountPrice = parseFloat(
    discountPriceElement.textContent.replace("$", "").replace(/,/g, "")
  );
  const totalPrice = parseFloat(
    totalPriceElement.textContent.replace("$", "").replace(/,/g, "")
  );

  const discountPercentage = ((totalPrice - discountPrice) / totalPrice) * 100;

  discountPercentElement.textContent = discountPercentage.toFixed(2) + "% Off";

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      thumbnails.forEach((thumb) => {
        thumb.classList.remove("selected-thumbnail");
      });

      this.classList.add("selected-thumbnail");

      const thumbnailSrc = this.src;
      productImage.src = thumbnailSrc;
    });
  });
});
