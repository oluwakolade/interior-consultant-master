const menuButton = document.querySelector(".mobile");
const menuLink = document.querySelector("nav");

menuButton.addEventListener("click", function () {
  menuLink.classList.toggle("nav-open");

  console.log("button was clicked");
});
