import { Users, IndianRupee, TrendingUp, Clock } from "lucide-react";

// ── Hardcoded stats ───────────────────────────────────────────────────────
const STATS = [
  { label: "Total Users",     value: "6",      icon: Users,       color: "text-secondary"   },
  { label: "Total Revenue",   value: "₹5,815", icon: IndianRupee, color: "text-primary"     },
  { label: "Active Users",    value: "5",       icon: TrendingUp,  color: "text-emerald-400" },
  { label: "Pending Payouts", value: "₹1,130", icon: Clock,       color: "text-amber-400"   },
];

export default function AdminDashboardPage() {
  return (
    <div className="relative min-h-screen bg-[hsl(230_35%_4%)] text-foreground font-sans">

      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[hsl(45_95%_58%/0.07)] blur-[100px]" />
        <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] rounded-full bg-[hsl(200_100%_55%/0.07)] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-8 pb-16">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground">
            Admin <span className="text-secondary">Dashboard</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Platform overview and user management
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="relative rounded-2xl overflow-hidden border border-white/[0.07] backdrop-blur-xl bg-[hsl(230_30%_8%/0.7)] p-5 hover:border-secondary/20 transition-colors"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
              <s.icon className={`${s.color} mb-3`} size={20} />
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}