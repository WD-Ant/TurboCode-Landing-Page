const textEffect = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let _interval = null;
  const h1Element = document.querySelector(".hero h1");
  const targetText = "TurboCode";

  function animateText() {
    let iteration = 0;
    const textLength = targetText.length;

    _interval = setInterval(() => {
      h1Element.innerText = targetText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return targetText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= textLength) {
        clearInterval(_interval);
        setTimeout(startAnimation, 2000);
      }

      iteration += 1;
    }, 50);
  }

  function startAnimation() {
    animateText();
  }

  startAnimation();
};

export default textEffect;