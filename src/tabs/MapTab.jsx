import "leaflet/dist/leaflet.css";
import L from 'leaflet'
// const L = require('leaflet')
import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";


const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const location = useSelector((state) => state.serverData.location);
  const redlight = useSelector((state) => state.serverData.redlight);
  const location_center = useSelector((state) => state.serverData.center_allowed_location);
  const location_range = useSelector((state) => state.serverData.locationrange);

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
    const range = L.circle([location_center.latitude, location_center.longitude], {
      color: 'red',
      radius: location_range,
      fillOpacity: 0.2,
    });
    const marker = L.marker([location.latitude, location.longitude]);
    if(location_range > 0){
      markers.addLayer(range);
    }
    markers.addLayer(marker);
  }, [location, location_range, location_center]);


  return (
    <>
      <div ref={mapContainer} style={{height: '100vh', width: '85vw'}}/>
      < div style={{width: '30', height: '30', backgroundColor: redlight? "red" : 'green' }}/>
    </>
  )
}


export default function MapTab(props) {
  return (
    <Map/>
  )
}