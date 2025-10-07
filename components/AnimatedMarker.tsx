import React from "react";

interface AnimatedMarkerProps {
  lat: number;
  lng: number;
}

const AnimatedMarker: React.FC<AnimatedMarkerProps> = ({ lat, lng }) => {
  return (
    <div style={{ transform: `translate(${lat}px, ${lng}px)` }}>
      📍
    </div>
  );
};

export default AnimatedMarker;
