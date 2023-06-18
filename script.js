const typingAnimation = (element, speed = 30) => {
  let i = 0;
  const text = element.innerHTML;

  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      let newSpeed = speed + Math.ceil(Math.random() * speed);
      setTimeout(typeWriter, newSpeed);
    }
  }
  element.innerHTML = "";
  typeWriter();
};

// init typing animation
const animatedElems = document.querySelectorAll(".typing-animation");
for (let elem of animatedElems) {
  typingAnimation(elem);
}

// easter egg animation
let animationTimerStart;
const avatarElem = document.querySelector(".contact-info__avatar");
avatarElem.addEventListener("mouseover", () => {
  animationTimerStart = setTimeout(() => {
    avatarElem.classList.add("easter-egg-animation");
  }, 2000);
});
avatarElem.addEventListener("mouseout", () => {
  clearTimeout(animationTimerStart);
});
avatarElem.addEventListener("animationend", (e) => {
  if (e.animationName == "rotate3d")
    avatarElem.classList.remove("easter-egg-animation");
});
