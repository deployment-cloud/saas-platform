import { getToken } from "next-auth/jwt";

export async function getTenantIdFromReq(req: Request): Promise<string> {
  const headerTenant = req.headers.get("x-tenant-id");
  if (headerTenant) return headerTenant;
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) throw new Error("No tenant");
    return token.tenantId as string;
  } catch (err) {
    throw new Error("Tenant not found in request");
  }
}
