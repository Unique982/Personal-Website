"use client";

import Sidebar from "@/components/admin/sidebar";
import TopHeader from "@/components/admin/topHeader";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Header */}
        <TopHeader />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
