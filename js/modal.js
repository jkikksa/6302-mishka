var modal = document.querySelector(".add-to-cart");
var overlay = document.querySelector(".overlay");

if (document.querySelector(".product-of-the-week__order-link")) {
  var button = document.querySelector(".product-of-the-week__order-link");
}


button.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("overlay--show");
  modal.classList.add("add-to-cart--show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();

  if (overlay.classList.contains("overlay--show")) {
    overlay.classList.remove("overlay--show");
  }

  if (modal.classList.contains("add-to-cart--show")) {
    modal.classList.remove("add-to-cart--show");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {

    if (overlay.classList.contains("overlay--show")) {
      overlay.classList.remove("overlay--show");
    }

    if (modal.classList.contains("add-to-cart--show")) {
      modal.classList.remove("add-to-cart--show");
    }
  }
});
