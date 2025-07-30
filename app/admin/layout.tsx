import type React from "react";
import { AdminSidebar } from "@/components/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-h-screen bg-background ">
      <AdminSidebar />
      <main className="flex-1 overflow-y-scroll">{children}</main>
    </div>
  );
}
