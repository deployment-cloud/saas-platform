import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";

/**
 * Handles POST /api/invitations
 * Creates a new invitation token for a user.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, tenantId, role = "USER", ttlHours = 72 } = body;

    // ✅ Validate input
    if (!email || !tenantId) {
      return NextResponse.json(
        { error: "Missing fields: email or tenantId" },
        { status: 400 }
      );
    }

    // ✅ Calculate expiry
    const expiresAt = new Date(Date.now() + ttlHours * 60 * 60 * 1000);

    // ✅ Create token
    const token = randomUUID();

    // ✅ Store invitation in DB
    const invitation = await prisma.invitation.create({
      data: {
        email,
        tenantId,
        role,
        token,
        expiresAt,
      },
    });

    return NextResponse.json({ success: true, invitation });
  } catch (error) {
    console.error("Error creating invitation:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * Optional: Handle GET requests to list all invitations
 */
export async function GET() {
  try {
    const invitations = await prisma.invitation.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(invitations);
  } catch (error) {
    console.error("Error fetching invitations:", error);
    return NextResponse.json(
      { error: "Failed to fetch invitations" },
      { status: 500 }
    );
  }
}
