"use client";

import { Marker, Popup } from "react-leaflet";
import { useEffect } from "react";
import { useSpring, animated } from "framer-motion";
import L from "leaflet";

const truckIcons = {
  IN_TRANSIT: "https://cdn-icons-png.flaticon.com/512/296/296216.png",
  DELIVERED: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  DELAYED: "https://cdn-icons-png.flaticon.com/512/565/565722.png",
};

type AnimatedMarkerProps = {
  reference: string;
  latitude: number;
  longitude: number;
  status: string;
  location: string;
  timestamp: string;
};

export function AnimatedMarker({
  reference,
  latitude,
  longitude,
  status,
  location,
  timestamp,
}: AnimatedMarkerProps) {
  const latSpring = useSpring(latitude, { stiffness: 80, damping: 20 });
  const lngSpring = useSpring(longitude, { stiffness: 80, damping: 20 });

  useEffect(() => {
    latSpring.set(latitude);
    lngSpring.set(longitude);
  }, [latitude, longitude]);

  const AnimatedMarker = animated(Marker);
  const truckIcon = new L.Icon({
    iconUrl: truckIcons[status as keyof typeof truckIcons] || truckIcons.IN_TRANSIT,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
  });

  return (
    <AnimatedMarker
      position={[latSpring.get() as number, lngSpring.get() as number]}
      icon={truckIcon}
    >
      <Popup>
        <div className="font-semibold">{reference}</div>
        <div className="text-sm text-gray-600">{status}</div>
        <div className="text-xs text-gray-400">
          {location} <br />
          {new Date(timestamp).toLocaleString()}
        </div>
      </Popup>
    </AnimatedMarker>
  );
}
