let themeColors = document.querySelectorAll(".theme-color");
let theme = localStorage.getItem("theme");
if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}
for (var i = 0; i < themeColors.length; i++) {
  themeColors[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode === "light") {
    document.querySelector("#theme-css").href = "./assets/css/default.css";
  } else if (mode === "blue") {
    document.querySelector("#theme-css").href = "./assets/css/blue.css";
  } else if (mode === "green") {
    document.querySelector("#theme-css").href = "./assets/css/green.css";
  } else if (mode === "purple") {
    document.querySelector("#theme-css").href = "./assets/css/purple.css";
  }
  localStorage.setItem("theme", mode);
}
