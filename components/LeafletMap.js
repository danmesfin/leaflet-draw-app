import React from 'react';
import {MapContainer,  TileLayer, MapContainerProps, FeatureGroup, Circle } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css"
import { EditControl } from 'react-leaflet-draw';
const LeafletMap = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true} className=' h-96'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
         <FeatureGroup>
    <EditControl
      position='topright'
      onEdited={()=>{}}
      onCreated={()=>{}}
      onDeleted={()=>{}}
      draw={{
        rectangle: false
      }}
    />
    <Circle center={[51.51, -0.06]} radius={200} />
  </FeatureGroup>
    </MapContainer>
  );
};

export default LeafletMap;
