import getIpInfo from "./ip_grab";
import updateUI, { banner } from "./ui";

const form = document.querySelector(".input-section form");

// Initialize map function
let map;
let marker;
const initMap = () => {
  map = L.map("map").setView([50, 20], 4);
  L.tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=CytKeq6rOcxTPM9GjsbJ",
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }
  ).addTo(map);
};

// Initialize map on load event
window.addEventListener("load", initMap);

// Form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();

  banner.innerHTML = `
    <div class="row">
      <span class="title">IP Address</span>
      <div class="loader"></div>
    </div>

    <div class="row">
      <span class="title">Location</span>
      <div class="loader"></div>
    </div>

    <div class="row">
      <span class="title">Timezone</span>
      <div class="loader"></div>
    </div>

    <div class="row">
        <span class="title">ISP</span>
        <div class="loader"></div>
    </div>
        `;

  getIpInfo(form.ipFinder.value)
    .then((data) => {
      updateUI(data);
      map.setView([data.location.lat, data.location.lng], 15);
      if (marker !== undefined) {
        map.removeLayer(marker);
      }
      marker = L.marker([data.location.lat, data.location.lng]).addTo(map);
      form.reset();
    })
    .catch((err) => console.log(err));
});
