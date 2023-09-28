const promotionsItems = document.querySelectorAll(".promotions__item");

promotionsItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
