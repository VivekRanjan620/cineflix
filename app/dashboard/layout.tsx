import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — CineFlix",
  description: "User dashboard for CineFlix",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
