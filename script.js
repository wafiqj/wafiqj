function myFunction(x) {
  x.classList.toggle("change");
  var menu = document.querySelector(".menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

window.addEventListener("resize", function () {
  var menu = document.querySelector(".menu");
  var container = document.querySelector('.container');
  if (window.innerWidth > 1280) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
    container.classList.remove('change');
  }
});
