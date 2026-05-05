import { AdminSidebar } from "./_components/AdminSidebar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[hsl(230_35%_4%)] flex">
      <AdminSidebar />
      <main className="flex-1 min-h-screen overflow-auto">
        {children}
      </main>
    </div>
  );
}