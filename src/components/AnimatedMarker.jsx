"use client";

import { Marker, Popup } from 'react-leaflet';

export default function AnimatedMarker({ position, popupText }) {
  return (
    <Marker position={position}>
      <Popup>{popupText}</Popup>
    </Marker>
  );
}
