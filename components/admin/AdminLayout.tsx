'use client';
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
export default function AdminLayout({ children }: { children: ReactNode }) {
  return (<div className="min-h-screen bg-gray-50 flex"><Sidebar /><div className="flex-1 p-6"><header className="mb-6"><h1 className="text-2xl font-semibold">Admin Console</h1></header><main>{children}</main></div></div>);
}
