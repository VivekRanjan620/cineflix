import { Users } from "lucide-react";
import { UsersTable } from "../_components/UsersTable";

export default function AdminUsersPage() {
  return (
    <div className="relative min-h-screen bg-[hsl(230_35%_4%)] text-foreground font-sans">

      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[hsl(45_95%_58%/0.07)] blur-[100px]" />
        <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] rounded-full bg-[hsl(200_100%_55%/0.07)] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-8 pb-16">

        {/* Page header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
            <Users className="text-secondary" size={18} />
          </div>
          <div>
            <h1 className="font-display text-xl font-semibold text-foreground">All Users</h1>
            <p className="text-sm text-muted-foreground">Manage registered users</p>
          </div>
        </div>

        <UsersTable />

      </div>
    </div>
  );
}