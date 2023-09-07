//dark mode //

const darkModeButton = document.getElementById("dark-mode");

const darkModeOn = () => {
  document.body.classList.add("darkMode");
  document.body.classList.remove("plainTextMode");
};

const darkModeOff = () => {
  document.body.classList.remove("darkMode");
  document.body.classList.remove("plainTextMode");
};

darkModeButton.addEventListener("click", () => {
  if (document.body.classList.contains("darkMode")) {
    darkModeOff();
  } else {
    darkModeOn();
  }
});

//plain text //
const plaintextButton = document.getElementById("plain-text");

const plainTextOn = () => {
  document.body.classList.add("plainTextMode");
  document.body.classList.remove("darkMode");
};

const plainTextOff = () => {
  document.body.classList.remove("plainTextMode");
};

plaintextButton.addEventListener("click", () => {
  if (document.body.classList.contains("plainTextMode")) {
    plainTextOff();
  } else {
    plainTextOn();
  }
});

//image change //

const imgButton = document.getElementById("header-img");

imgButton.addEventListener("click", () => {
  if (imgButton.getAttribute("src") === "images/me-image.jpg") {
    imgButton.setAttribute("src", "images/me-image-new.jpg");
    imgButton.setAttribute("title", "My head fits through this one");
    imgButton.setAttribute(
      "alt",
      "a photo of me, Jack, aged six, poking my head through a hole in a wall"
    );
  } else {
    imgButton.setAttribute("src", "images/me-image.jpg");
    imgButton.setAttribute("title", "My head doesn't fit anymore");
    imgButton.setAttribute(
      "alt",
      "a photo of me, Jack, aged twenty-five, poking my head through a hole in a wall"
    );
  }
});

// keydown to make more text appear //

const textToShow = document.getElementById("extra-text1");
let count = 0;
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown") {
    count++;
    if (count === 1) {
      document.body.classList.add("showmeOne");
    }
    if (count === 2) {
      document.body.classList.add("showmeTwo");
    }
  }
});

const textToShow2 = document.getElementById("extra-text2");
