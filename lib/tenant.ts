import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

/**
 * Extract tenantId from:
 * 1. Header: `x-tenant-id`
 * 2. Auth token (NextAuth JWT)
 */
export async function getTenantIdFromReq(req: Request | NextRequest): Promise<string> {
  // Check for tenant in header first
  const headerTenant = req.headers.get("x-tenant-id");
  if (headerTenant) return headerTenant;

  try {
    // Cast req to any so getToken accepts it
    const token = await getToken({ req: req as any, secret: process.env.NEXTAUTH_SECRET });

    if (token?.tenantId) {
      return token.tenantId as string;
    }

    throw new Error("Tenant not found in token");
  } catch (err) {
    console.error("Tenant extraction failed:", err);
    throw new Error("Tenant not found in request");
  }
} // 
