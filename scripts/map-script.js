// The Leaflet map Object
const map = L.map("map", {
  center: [41.48133, -71.312549],
  zoom: 15,
  zoomControl: false,
  minZoom: 14,
  maxZoom: 16,
});

const myIcon = L.icon({
  iconUrl: "./assets/icon-location.svg",
  iconSize: [66, 88],
  iconAnchor: [22, 94],
});

L.marker([41.48050446235672, -71.31091820155076], { icon: myIcon }).addTo(map);
L.tileLayer(
  "https://maps.geoapify.com/v1/tile/toner-grey/{z}/{x}/{y}.png?apiKey=36759b8de7e9498e9b64ee2b7cc955cb",
  {
    attribution:
      'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap</a> contributors',
    maxZoom: 16,
    id: "toner-grey",
  }
).addTo(map);

// the attribution is required for the Geoapify Free tariff plan
map.attributionControl
  .setPrefix("")
  .addAttribution(
    'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | &copy; OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
  );
