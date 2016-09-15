var toggler = document.querySelector('.menu-toggler');
var menu = document.querySelector('.main-menu');

toggler.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.toggle("main-menu--show");
  toggler.classList.toggle("menu-toggler--opened");

});
