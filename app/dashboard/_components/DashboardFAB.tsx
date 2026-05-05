"use client";

import Link from "next/link";
import { LayoutDashboard } from "lucide-react";

export function DashboardFAB() {
  return (
    <Link
      href="/dashboard"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full btn-neon text-xs shadow-[var(--glow-gold)] animate-fade-in"
      aria-label="Open Dashboard"
    >
      <LayoutDashboard size={16} />
      <span className="hidden sm:inline">Dashboard</span>
    </Link>
  );
}
