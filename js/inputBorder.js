const checkoutFormInputs = document.querySelectorAll(".checkout-form__input");

checkoutFormInputs.forEach((input) => {
  const labelWidth = input.querySelector("label").offsetWidth;
  const inputTopBorder = input.querySelector(
    ".checkout-form__input-top-border"
  );
  inputTopBorder.style.left = `${labelWidth + 16}px`;
});
