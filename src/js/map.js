function initMap() {
  var myLatLng = {lat: 59.936350, lng: 30.321120};
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 59.936343, lng: 30.321770},
    zoom: 16
  });
  var image = "img/icon-map-pin.png";
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: "Mishka"
  });
};
