import './style.css'
import olMap from 'ol/Map'
import olView from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

const app = document.getElementById('app');
const mapTargetElement = window.mapElement = document.createElement('div');
mapTargetElement.id = 'map';
mapTargetElement.className = 'map';

app.appendChild(mapTargetElement);

const map = window.olMap = new olMap({
  target: mapTargetElement,
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new olView({
    center: [0, 0],
    zoom: 2
  })
});

console.log('Map initialized:', map);
