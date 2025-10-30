"use client";

import { ProtectedRoute } from "@/components/providers/ProtectedRoute";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
