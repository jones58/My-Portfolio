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
