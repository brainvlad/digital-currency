// counter
const minusButtons = document.querySelectorAll(".cart__input-arrow_down");
const plusButtons = document.querySelectorAll(".cart__input-arrow_up");
const quantities = document.querySelectorAll(".cart__input-value");
const totalCosts = document.querySelectorAll(".cart__totalcost-value");
const subtotalCosts = document.querySelector(".cart__subtotalcost-value");

minusButtons.forEach((minusButton, index) => {
  minusButton.addEventListener("click", () => {
    if (quantities[index].innerHTML > 1) {
      quantities[index].innerHTML--;
      totalCosts[index].innerHTML = (quantities[index].innerHTML * 100).toFixed(
        2
      );
      subtotalCosts.innerHTML = (subtotalCosts.innerHTML - 100).toFixed(2);
    }
  });
});

plusButtons.forEach((plusButton, index) => {
  plusButton.addEventListener("click", () => {
    quantities[index].innerHTML++;
    totalCosts[index].innerHTML = (quantities[index].innerHTML * 100).toFixed(
      2
    );
    subtotalCosts.innerHTML = (+subtotalCosts.innerHTML + 100).toFixed(2);
  });
});

// remove buttons
const removeIcons = document.querySelectorAll(".cart__remove-icon");
removeIcons.forEach((removeIcon) => {
  removeIcon.addEventListener("click", function () {
    const cartItem = this.closest(".cart__item");
    cartItem.remove();
  });
});
