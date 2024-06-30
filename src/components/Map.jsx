// import React from 'react'
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// import markerIcon from "../images/map-marker.svg";
// import { MapContainer, Marker, TileLayer } from 'react-leaflet';

// const Map = ({ coordinates }) => {
//     const marker = new L.icon({ 
//         iconUrl: markerIcon
//     });
//     let state = {
//         keyMAP: Math.random(),
//     };
//   return (
//     <MapContainer key={state.keyMAP} center={[coordinates.lat, coordinates.lng]} className="w-full h-3/5 z-0">
//         <TileLayer attribution="Google Maps" url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}">
//             <Marker position={[coordinates.lat, coordinates.lng]} icon={marker}>
//             </Marker>
//         </TileLayer>
//     </MapContainer>
//   )
// }

// export default Map


import React from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../images/map-marker.svg';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Map = ({ coordinates }) => {
  const marker = new L.Icon({ 
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  let state = {
    keyMAP: Math.random(),
  };

  if (!coordinates.lat || !coordinates.lng){
    return <div>Loading map...</div>;
  }

  return (
    <MapContainer key={state.keyMAP} center={[coordinates.lat, coordinates.lng]} zoom={15} className="w-full h-3/5 z-0">
      <TileLayer
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      />
      <Marker position={[coordinates.lat, coordinates.lng]} icon={marker} />
    </MapContainer>
  );
}

export default Map;
