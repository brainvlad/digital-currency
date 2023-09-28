const toggleDropdown = () => {
  const dropdownToggle = document.getElementById("dropdown-toggle");
  const dropdownBody = document.getElementById("dropdown-body");

  dropdownToggle.addEventListener("click", () => {
    dropdownToggle.classList.toggle("active");
    dropdownBody.classList.toggle("active");
  });
};

toggleDropdown();
