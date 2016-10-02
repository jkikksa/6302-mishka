var video = document.querySelector(".video");
var videoControls = document.querySelector(".video__controls");
var videoToggler = document.querySelector(".video__toggler");

videoToggler.addEventListener("click", function(event) {
  event.preventDefault();
  if (video.paused == true) {
    video.play();
    videoControls.classList.add("video--playing");
  }
  else {
    video.pause();
    videoControls.classList.remove("video--playing");
  }
});

video.addEventListener("mouseover", function(event) {
  videoToggler.classList.add("video__toggler--visible");
});

video.addEventListener("mouseout", function(event) {
  videoToggler.classList.remove("video__toggler--visible");
});

videoToggler.addEventListener("mouseover", function(event) {
  videoToggler.classList.add("video__toggler--visible");
});

videoToggler.addEventListener("mouseout", function(event) {
  videoToggler.classList.remove("video__toggler--visible");
});
