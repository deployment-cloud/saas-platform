import { PrismaClient } from "@prisma/client";
import Pusher from "pusher";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

const pusherServer = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});

const randomCoords = () => {
  const lat = 30 + Math.random() * 5;
  const lng = 70 + Math.random() * 7;
  return { lat, lng };
};

async function simulate() {
  console.log("🚛 Simulating live shipment updates...");
  while (true) {
    const shipments = await prisma.shipment.findMany();
    for (const shipment of shipments) {
      const { lat, lng } = randomCoords();
      const now = new Date();

      await prisma.shipment.update({
        where: { id: shipment.id },
        data: {
          currentLocation: `Lat: ${lat.toFixed(2)}, Lng: ${lng.toFixed(2)}`,
          latitude: lat,
          longitude: lng,
          status: "IN_TRANSIT",
        },
      });

      await pusherServer.trigger("shipments-channel", "shipment-update", {
        reference: shipment.reference,
        location: `Lat: ${lat.toFixed(2)}, Lng: ${lng.toFixed(2)}`,
        latitude: lat,
        longitude: lng,
        status: "IN_TRANSIT",
        timestamp: now,
      });

      await new Promise((r) => setTimeout(r, 2000));
    }
  }
}

simulate().catch(console.error);
