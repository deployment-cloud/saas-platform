import { Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';

interface AnimatedMarkerProps {
  position: [number, number];
}

export const AnimatedMarker = ({ position }: AnimatedMarkerProps) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, map.getZoom(), { animate: true });
  }, [position, map]);

  return <Marker position={position} icon={L.icon({ iconUrl: '/marker-icon.png' })} />;
};
