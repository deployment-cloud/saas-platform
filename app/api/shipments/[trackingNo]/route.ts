import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

/**
 * GET /api/shipments/[trackingNo]
 * Fetch a single shipment and its latest tracking update
 */
export async function GET(
  req: Request,
  { params }: { params: { trackingNo: string } }
) {
  try {
    const shipment = await prisma.shipment.findUnique({
      where: { trackingNo: params.trackingNo },
      include: {
        tracking: {
          orderBy: { timestamp: "desc" },
          take: 1, // Get latest tracking update only
        },
      },
    });

    if (!shipment) {
      return NextResponse.json(
        { success: false, message: "Shipment not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: shipment,
    });
  } catch (error) {
    console.error("Error fetching shipment details:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch shipment details." },
      { status: 500 }
    );
  }
}
