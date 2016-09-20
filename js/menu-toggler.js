var toggler = document.querySelector(".main-menu__toggler");
var menu = document.querySelector(".main-menu");

menu.classList.remove("main-menu--no-js");

toggler.addEventListener("click", function(event) {
  event.preventDefault();
  if (menu.classList.contains("main-menu--closed")) {
    menu.classList.add("main-menu--opened");
    menu.classList.remove("main-menu--closed");
  }
  else {
    menu.classList.add("main-menu--closed");
    menu.classList.remove("main-menu--opened");
  }
})
