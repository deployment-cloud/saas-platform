"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { pusherClient } from "@/lib/pusher-client";
import { AnimatedMarker } from "@/components/AnimatedMarker";
import "leaflet/dist/leaflet.css";

type Shipment = {
  reference: string;
  location: string;
  status: string;
  latitude: number;
  longitude: number;
  timestamp: string;
};

export default function DashboardPage() {
  const [shipments, setShipments] = useState<Shipment[]>([]);

  useEffect(() => {
    const channel = pusherClient.subscribe("shipments-channel");

    channel.bind("shipment-update", (data: Shipment) => {
      setShipments((prev) => {
        const existing = prev.filter((s) => s.reference !== data.reference);
        return [{ ...data }, ...existing];
      });
    });

    return () => {
      pusherClient.unsubscribe("shipments-channel");
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🚚 Live Fleet Tracking</h1>

      <MapContainer
        center={[31.5204, 74.3587]}
        zoom={6}
        style={{ height: "80vh", borderRadius: "16px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {shipments.map((s) => (
          <AnimatedMarker key={s.reference} {...s} />
        ))}
      </MapContainer>
    </div>
  );
}
