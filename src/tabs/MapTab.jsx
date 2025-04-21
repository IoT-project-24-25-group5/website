import "leaflet/dist/leaflet.css";
import L from 'leaflet'
// const L = require('leaflet')
import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";


const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const location = useSelector((state) => state.serverData.location);

  const [zoom] = useState(20)

  const [markers] = useState(L.layerGroup());

  useEffect(() => {
    if (map.current) return;


    map.current = new L.Map(mapContainer.current, {
      center: L.latLng(location.latitude, location.longitude),
      zoom: zoom
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map.current);

    markers.addTo(map.current);

  }, []);

  useEffect(() => {
    markers.clearLayers();
    const marker = L.marker([location.latitude, location.longitude]);
    markers.addLayer(marker);
  }, [location]);


  return (

      <div ref={mapContainer} style={{height: '100vh', width: '85vw'}}/>

  )
}


export default function MapTab(props) {
  return (
    <Map/>
  )
}