const mobileNav = () => {
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
    navbarLinks.classList.toggle("active");

    navbarLinks.addEventListener("click", () => {
      toggleButton.classList.remove("active");
      navbarLinks.classList.remove("active");
    });
  });
};

export default mobileNav;