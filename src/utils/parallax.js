const parallaxScroll = () => {
  window.addEventListener("scroll", function () {
    let parallax = document.querySelector(".parallax");
    let scrollPosition = window.scrollY;

    parallax.style.transform = "translateY(" + scrollPosition * 1 + "px)";
  });
};

export default parallaxScroll;