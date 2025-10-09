import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

/**
 * GET /api/shipments/[trackingNo]
 * Fetch a single shipment and its latest tracking event
 */
export async function GET(
  req: Request,
  { params }: { params: { trackingNo: string } }
) {
  try {
    const shipment = await prisma.shipment.findUnique({
      where: { trackingNo: params.trackingNo },
      include: {
        trackingEvents: {
          orderBy: { timestamp: "desc" },
          take: 1,
        },
      },
    });

    if (!shipment) {
      return NextResponse.json(
        { success: false, message: "Shipment not found." },
        { status: 404 }
      );
    }

    // Optional: Flatten the latest tracking event
    const latestTracking = shipment.trackingEvents[0] || null;

    return NextResponse.json({
      success: true,
      data: { ...shipment, latestTracking },
    });
  } catch (error) {
    console.error("Error fetching shipment details:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch shipment details." },
      { status: 500 }
    );
  }
}
