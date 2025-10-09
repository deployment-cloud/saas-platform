import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";

export async function GET(request: Request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const tenantId = token.tenantId;

  // Example stats query
  const stats = await prisma.shipment.count({
    where: { tenantId },
  });

  return NextResponse.json({
    success: true,
    data: { totalShipments: stats },
  });
}
