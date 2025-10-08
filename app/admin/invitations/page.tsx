"use client";
import { useState, useEffect } from "react";

interface Invitation {
  id: string;
  email: string;
  role: string;
  token: string;
  tenantId: string;
  expiresAt: string;
  accepted: boolean;
  createdAt: string;
}

export default function InvitationsPage() {
  const [email, setEmail] = useState("");
  const [tenant, setTenant] = useState("");
  const [invites, setInvites] = useState<Invitation[]>([]);

  useEffect(() => {
    fetch("/api/invitations")
      .then(r => r.json())
      .then(setInvites);
  }, []);

  async function createInvite(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/invitations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, tenantId: tenant }),
    });
    const data = await res.json();
    setInvites(prev => [data.invite, ...prev]);
    setEmail("");
  }

  return (
    <div className="p-6">
      <form onSubmit={createInvite} className="space-x-2 mb-4">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Invite email"
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Send Invite
        </button>
      </form>

      <div>
        {invites.map(inv => (
          <div key={inv.id} className="p-3 bg-white rounded shadow mb-2">
            <div>
              <strong>{inv.email}</strong> — {inv.role}
            </div>
            <div className="text-sm text-gray-500">
              Expires: {new Date(inv.expiresAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
