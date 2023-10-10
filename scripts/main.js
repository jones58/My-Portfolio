//dark mode //

const darkModeButton = document.getElementById("dark-mode");

const darkModeOn = () => {
  document.body.classList.add("darkMode");
};

const darkModeOff = () => {
  document.body.classList.remove("darkMode");
};

darkModeButton.addEventListener("click", () => {
  if (document.body.classList.contains("darkMode")) {
    darkModeOff();
  } else {
    darkModeOn();
  }
});

// type out big words on launch //

document.addEventListener("DOMContentLoaded", function () {
  const typedText = document.getElementById("big-introduction");
  function typeOut() {
    const originalText = typedText.textContent;
    typedText.textContent = "";
    for (let i = 0; i < originalText.length; i++) {
      let randomDelay = Math.random() * 100 * i;
      setTimeout(() => {
        typedText.textContent += originalText[i];
      }, 50 * i);
    }
  }
  setTimeout(typeOut, 100);
});
